import { Ping, Pong, RegisterClientRequest } from '$lib/types/main';
import type { MessageType, UnknownMessage } from '$lib/types/typeRegistry';
import { messageIdType, messageTypeId } from '$lib/client/messageId';

enum clientState {
	DISCONNECTED = 'DISCONNECTED',
	CONNECTING = 'CONNECTING',
	CONNECTED = 'CONNECTED'
}

export class Connection {
	private state: clientState = clientState.DISCONNECTED;

	public socket: WebSocket;

	private keepAliveInterval = 5000;
	private keepAliveTimeout = 10000;

	constructor(ip: string, port: number) {
		this.socket = new WebSocket(`ws://${ip}:${port}`, 'binary');
		this.socket.binaryType = 'arraybuffer';

		this.state = clientState.CONNECTING;

		this.socket.onerror = (event) => {
			console.warn('Connection error', event);
		};

		this.socket.onopen = () => {
			this.state = clientState.CONNECTED;
			console.log(`Connected to server ${ip}:${port}`);
			this.registerKeepAlive();
		};

		this.socket.onclose = () => {
			this.state = clientState.DISCONNECTED;
			console.log('Connection closed');
		};

		this.socket.onmessage = (event) => {
			this.handleMessage(event, this.socket);
		};
	}

	public sendPrefixed(msg: UnknownMessage, msgType: MessageType) {
		let msgId = messageTypeId.get(msgType);
		if (msgId === undefined) throw new Error(`Message type ${msgType} not registered`);

		let buffer = msgType.encode(msg).finish();
		let prefixedBuffer = new Uint8Array([msgId, ...buffer]);

		this.socket.send(prefixedBuffer);
	}

	private registerKeepAlive() {
		setInterval(() => {
			console.log('Ping sent');
			this.sendPrefixed(Ping.create(), Ping);
		}, 8000);
	}

	private handleMessage(event: MessageEvent, socket: WebSocket) {
		console.log('Message received');
		let data = new Uint8Array(event.data);

		let msgId = messageIdType.get(data[0]);
		console.log('Message id', msgId, data[0]);
		if (msgId === undefined) throw new Error(`Message id ${data[0]} not registered`);
		let msgData = data.slice(1);
		// TODO: Messages are not order correctly
		// Figure another way? Manual?
		if (msgId.$type === Ping.$type) {
			console.log('Ping received, sending Pong');
			this.sendPrefixed(Pong.create(), Pong);
			return;
		}
		console.log('Got different message');
	}
}

export function registerClient(clientInfo: RegisterClientRequest) {
	var clientRequest = RegisterClientRequest.create({
		videoInfo: { resolution: { width: 300, height: 300, fps: 15 }, colorDepth: 16 },
		audioInfo: { bitrate: 128, sampleRate: 44100, channels: 2 },
		canControl: true
	});
	var buffer = RegisterClientRequest.encode(clientInfo).finish();
}
