import { PUBLIC_KEEPALIVE_INTERVAL, PUBLIC_KEEPALIVE_TIMEOUT_RETRIES } from '$env/static/public';
import { messageIdType, messageTypeId } from '$lib/client/messageId';
import { videos } from '$lib/client/stores/videosList';
import {
	AudioFrameUpdate,
	DeviceInfoListRequest,
	DeviceInfoResponse,
	Ping,
	Pong,
	RegisterClientRequest,
	RegisterClientResponse,
	SignalSequenceFrameUpdate,
	SignalUpdateRequest,
	VideoFrameUpdate,
	VideoMetadataListRequest,
	VideoMetadataResponse
} from '$lib/types/main';
import type { MessageType, UnknownMessage } from '$lib/types/typeRegistry';
import { devices } from './stores/devicesList';

export enum ConnectionState {
	DISCONNECTED = 'DISCONNECTED',
	CONNECTING = 'CONNECTING',
	CONNECTED = 'CONNECTED'
}

export class Connection {
	private socket: WebSocket;

	public state: ConnectionState = ConnectionState.DISCONNECTED;
	public id: number = -1;

	private keepAliveRetriesLeft = Number.parseInt(PUBLIC_KEEPALIVE_TIMEOUT_RETRIES);
	private keepAliveIntervalId: ReturnType<typeof setInterval> | undefined;

	constructor(base: { ip: string; port: number }) {
		this.socket = new WebSocket(`ws://${base.ip}:${base.port}`, 'binary');
		this.socket.binaryType = 'arraybuffer';

		this.state = ConnectionState.CONNECTING;

		this.socket.onerror = async (event) => {
			console.warn('Connection error', event);
			if (this.state == ConnectionState.CONNECTING) this.state = ConnectionState.DISCONNECTED;
		};

		this.socket.onopen = async () => {
			this.state = ConnectionState.CONNECTED;
			console.log(`Connected to WebSocket server ${base.ip}:${base.port}`);

			this.registerClient();
			this.registerKeepAlive();

			this.sendPrefixed(VideoMetadataListRequest.create(), VideoMetadataListRequest);
			this.sendPrefixed(DeviceInfoListRequest.create(), DeviceInfoListRequest);
		};

		this.socket.onclose = async () => {
			this.state = ConnectionState.DISCONNECTED;
			console.log('Connection closed');

			clearInterval(this.keepAliveIntervalId);
		};

		this.socket.onmessage = async (event) => {
			this.handleMessage(event);
		};
	}

	public sendPrefixed(msg: UnknownMessage, msgType: MessageType) {
		const msgId = messageTypeId.get(msgType);
		if (msgId === undefined) throw new Error(`Message type ${msgType} not registered`);

		const buffer = msgType.encode(msg).finish();
		const prefixedBuffer = new Uint8Array([msgId, ...buffer]);

		this.socket.send(prefixedBuffer);
	}

	private registerClient() {
		const clientRequest = RegisterClientRequest.create({
			videoInfo: { resolution: { width: 300, height: 300, fps: 15 }, colorDepth: 16 },
			audioInfo: { bitrate: 128, sampleRate: 20000, channels: 2 },
			canControl: true
		});
		this.sendPrefixed(clientRequest, RegisterClientRequest);
	}

	private registerKeepAlive() {
		this.keepAliveIntervalId = setInterval(() => {
			if (this.keepAliveRetriesLeft == 0) {
				this.socket.close();
				console.warn('Websocket connection to server timed out');
				return;
			}
			this.keepAliveRetriesLeft -= 1;
			this.sendPrefixed(Ping.create(), Ping);
		}, Number.parseInt(PUBLIC_KEEPALIVE_INTERVAL));
	}

	private handleMessage(event: MessageEvent) {
		const data = new Uint8Array(event.data);

		const msgId = messageIdType.get(data[0]);
		if (msgId === undefined) throw new Error(`Message id ${data[0]} not registered`);
		const msgData = data.slice(1);

		console.log('Received message', msgId, msgData);
		switch (msgId.$type) {
			case Ping.$type: {
				this.sendPrefixed(Pong.create(), Pong);
				break;
			}

			case Pong.$type: {
				this.keepAliveRetriesLeft = Number.parseInt(PUBLIC_KEEPALIVE_TIMEOUT_RETRIES);
				break;
			}

			case RegisterClientResponse.$type: {
				const clientData = RegisterClientResponse.decode(msgData);
				this.id = clientData.clientId;
				console.log('Registered client with ID', this.id);
				break;
			}

			case VideoFrameUpdate.$type: {
				break;
			}

			case AudioFrameUpdate.$type: {
				break;
			}

			case VideoMetadataResponse.$type: {
				const videoMetadataContainer = VideoMetadataResponse.decode(msgData);
				videos.updateVideos(videoMetadataContainer.videosMetadata);
				break;
			}

			case SignalSequenceFrameUpdate.$type: {
				break;
			}

			case SignalUpdateRequest.$type: {
				break;
			}

			case DeviceInfoResponse.$type: {
				const deviceInfoContainer = DeviceInfoResponse.decode(msgData);
				devices.updateDevices(deviceInfoContainer.devices);
				break;
			}
		}
	}
}
