import { messageTypeRegistry, type MessageType } from '$lib/types/typeRegistry';

export const messageTypeId = new Map<MessageType, number>(
	Array.from(messageTypeRegistry.values()).map((value, index) => [value, index + 1])
);

console.log(messageTypeRegistry);
console.log(messageTypeId);

export const messageIdType = new Map<number, MessageType>(
	Array.from(messageTypeId, ([key, value]) => [value, key])
);

console.log(messageIdType);
