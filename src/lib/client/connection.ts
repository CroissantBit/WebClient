import { PUBLIC_KEEPALIVE_INTERVAL, PUBLIC_KEEPALIVE_TIMEOUT_RETRIES } from '$env/static/public';
import { messageIdType, messageTypeId } from '$lib/client/messageId';
import {
	AudioFrame,
	Ping,
	Pong,
	RegisterClientRequest,
	RegisterClientResponse,
	VideoFrameUpdate,
	VideoMetadataResponse
} from '$lib/types/main';
import type { MessageType, UnknownMessage } from '$lib/types/typeRegistry';

enum clientState {
	DISCONNECTED = 'DISCONNECTED',
	CONNECTING = 'CONNECTING',
	CONNECTED = 'CONNECTED'
}

export class Connection {
	public socket: WebSocket;

	private state: clientState = clientState.DISCONNECTED;
	private keepAliveRetriesLeft = Number.parseInt(PUBLIC_KEEPALIVE_TIMEOUT_RETRIES);
	private keepAliveIntervalId: any;

	private id: number;

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

			clearInterval(this.keepAliveIntervalId);
		};

		this.socket.onmessage = (event) => {
			this.handleMessage(event);
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
		this.keepAliveIntervalId = setInterval(() => {
			if (this.keepAliveRetriesLeft == 0) {
				this.socket.close();
				console.log(this.socket);
				return;
			}
			this.keepAliveRetriesLeft -= 1;
			this.sendPrefixed(Ping.create(), Ping);
		}, Number.parseInt(PUBLIC_KEEPALIVE_INTERVAL));
	}

	private handleMessage(event: MessageEvent) {
		console.log('Message received');
		let data = new Uint8Array(event.data);

		let msgId = messageIdType.get(data[0]);
		console.log('Message id', msgId, data[0]);
		if (msgId === undefined) throw new Error(`Message id ${data[0]} not registered`);
		let msgData = data.slice(1);

		switch (msgId.$type) {
			case Ping.$type:
				console.log('Ping received, sending Pong');
				this.sendPrefixed(Pong.create(), Pong);
				break;
			case Pong.$type:
				this.keepAliveRetriesLeft = Number.parseInt(PUBLIC_KEEPALIVE_TIMEOUT_RETRIES);
				console.log('Pong received');
				break;
			case RegisterClientResponse.$type:
				let clientData = RegisterClientResponse.decode(msgData);
				this.id = clientData.clientId;
				break;
			case VideoFrameUpdate.$type:
				break;
			case AudioFrame.$type:
				break;
			case VideoMetadataResponse.$type:
				let videoMetadataContainer = VideoMetadataResponse.decode(msgData);
				videoMetadataContainer.videosMetadata.forEach((element) => {});
				break;
		}
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
