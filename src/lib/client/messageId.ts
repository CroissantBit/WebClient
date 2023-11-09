import {
	AudioFrameUpdate,
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

/**
 * Each message has an assigned ID that matches the order in the .proto file.
 * This is why the orderedMessages array is ordered in the way it is.
 * Will need to be updated manually on each new proto-spec iteration
 */
export const orderedMessages = [
	Ping,
	Pong,
	RegisterClientRequest,
	RegisterClientResponse,
	VideoFrameUpdate,
	AudioFrameUpdate,
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
