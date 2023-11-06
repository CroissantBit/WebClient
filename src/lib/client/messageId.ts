import {
	AudioFrame,
	Ping,
	Pong,
	RegisterClientRequest,
	RegisterClientResponse,
	SignalSequenceFrameUpdate,
	SignalUpdateRequest,
	SignalUpdateResponse,
	VideoFrameUpdate,
	VideoMetadataListRequest,
	VideoMetadataRequest,
	VideoMetadataResponse
} from '$lib/types/main';
import type { MessageType } from '$lib/types/typeRegistry';

// Will need to be updated manually on each new proto-spec iteration 
// This is due to each message must be assigned a ID that matches the order in the .proto file
export const orderedMessages = [
	Ping,
	Pong,
	RegisterClientRequest,
	RegisterClientResponse,
	VideoFrameUpdate,
	AudioFrame,
	VideoMetadataListRequest,
	VideoMetadataRequest,
	VideoMetadataResponse,
	SignalSequenceFrameUpdate,
	SignalUpdateRequest,
	SignalUpdateResponse
];

export const messageTypeId = new Map<MessageType, number>(
	Array.from(orderedMessages).map((value, index) => [value, index + 1])
);

export const messageIdType = new Map<number, MessageType>(
	Array.from(orderedMessages).map((value, index) => [index + 1, value])
);
