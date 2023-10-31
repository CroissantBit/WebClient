import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace croissantbit. */
export namespace croissantbit {

    /** Properties of a Ping. */
    interface IPing {
    }

    /** Represents a Ping. */
    class Ping implements IPing {

        /**
         * Constructs a new Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: croissantbit.IPing);

        /**
         * Creates a new Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ping instance
         */
        public static create(properties?: croissantbit.IPing): croissantbit.Ping;

        /**
         * Encodes the specified Ping message. Does not implicitly {@link croissantbit.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: croissantbit.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link croissantbit.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: croissantbit.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): croissantbit.Ping;

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): croissantbit.Ping;

        /**
         * Verifies a Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ping
         */
        public static fromObject(object: { [k: string]: any }): croissantbit.Ping;

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @param message Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: croissantbit.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ping
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Pong. */
    interface IPong {
    }

    /** Represents a Pong. */
    class Pong implements IPong {

        /**
         * Constructs a new Pong.
         * @param [properties] Properties to set
         */
        constructor(properties?: croissantbit.IPong);

        /**
         * Creates a new Pong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pong instance
         */
        public static create(properties?: croissantbit.IPong): croissantbit.Pong;

        /**
         * Encodes the specified Pong message. Does not implicitly {@link croissantbit.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: croissantbit.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link croissantbit.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: croissantbit.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): croissantbit.Pong;

        /**
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): croissantbit.Pong;

        /**
         * Verifies a Pong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pong
         */
        public static fromObject(object: { [k: string]: any }): croissantbit.Pong;

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @param message Pong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: croissantbit.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Pong
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterClient. */
    interface IRegisterClient {

        /** RegisterClient videoInfo */
        videoInfo?: (croissantbit.IVideoInfo|null);

        /** RegisterClient audioInfo */
        audioInfo?: (croissantbit.IAudioInfo|null);
    }

    /** Represents a RegisterClient. */
    class RegisterClient implements IRegisterClient {

        /**
         * Constructs a new RegisterClient.
         * @param [properties] Properties to set
         */
        constructor(properties?: croissantbit.IRegisterClient);

        /** RegisterClient videoInfo. */
        public videoInfo?: (croissantbit.IVideoInfo|null);

        /** RegisterClient audioInfo. */
        public audioInfo?: (croissantbit.IAudioInfo|null);

        /** RegisterClient _videoInfo. */
        public _videoInfo?: "videoInfo";

        /** RegisterClient _audioInfo. */
        public _audioInfo?: "audioInfo";

        /**
         * Creates a new RegisterClient instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterClient instance
         */
        public static create(properties?: croissantbit.IRegisterClient): croissantbit.RegisterClient;

        /**
         * Encodes the specified RegisterClient message. Does not implicitly {@link croissantbit.RegisterClient.verify|verify} messages.
         * @param message RegisterClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: croissantbit.IRegisterClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterClient message, length delimited. Does not implicitly {@link croissantbit.RegisterClient.verify|verify} messages.
         * @param message RegisterClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: croissantbit.IRegisterClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterClient message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): croissantbit.RegisterClient;

        /**
         * Decodes a RegisterClient message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): croissantbit.RegisterClient;

        /**
         * Verifies a RegisterClient message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterClient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterClient
         */
        public static fromObject(object: { [k: string]: any }): croissantbit.RegisterClient;

        /**
         * Creates a plain object from a RegisterClient message. Also converts values to other types if specified.
         * @param message RegisterClient
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: croissantbit.RegisterClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterClient to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterClient
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterClientResponse. */
    interface IRegisterClientResponse {

        /** RegisterClientResponse clientId */
        clientId?: (number|null);
    }

    /** Represents a RegisterClientResponse. */
    class RegisterClientResponse implements IRegisterClientResponse {

        /**
         * Constructs a new RegisterClientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: croissantbit.IRegisterClientResponse);

        /** RegisterClientResponse clientId. */
        public clientId?: (number|null);

        /** RegisterClientResponse _clientId. */
        public _clientId?: "clientId";

        /**
         * Creates a new RegisterClientResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterClientResponse instance
         */
        public static create(properties?: croissantbit.IRegisterClientResponse): croissantbit.RegisterClientResponse;

        /**
         * Encodes the specified RegisterClientResponse message. Does not implicitly {@link croissantbit.RegisterClientResponse.verify|verify} messages.
         * @param message RegisterClientResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: croissantbit.IRegisterClientResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterClientResponse message, length delimited. Does not implicitly {@link croissantbit.RegisterClientResponse.verify|verify} messages.
         * @param message RegisterClientResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: croissantbit.IRegisterClientResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterClientResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterClientResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): croissantbit.RegisterClientResponse;

        /**
         * Decodes a RegisterClientResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterClientResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): croissantbit.RegisterClientResponse;

        /**
         * Verifies a RegisterClientResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterClientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterClientResponse
         */
        public static fromObject(object: { [k: string]: any }): croissantbit.RegisterClientResponse;

        /**
         * Creates a plain object from a RegisterClientResponse message. Also converts values to other types if specified.
         * @param message RegisterClientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: croissantbit.RegisterClientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterClientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterClientResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VideoFrame. */
    interface IVideoFrame {

        /** VideoFrame full */
        full?: (croissantbit.IVideoFrameFull|null);

        /** VideoFrame partial */
        partial?: (croissantbit.IVideoFramePartial|null);
    }

    /** Represents a VideoFrame. */
    class VideoFrame implements IVideoFrame {

        /**
         * Constructs a new VideoFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: croissantbit.IVideoFrame);

        /** VideoFrame full. */
        public full?: (croissantbit.IVideoFrameFull|null);

        /** VideoFrame partial. */
        public partial?: (croissantbit.IVideoFramePartial|null);

        /** VideoFrame payload. */
        public payload?: ("full"|"partial");

        /**
         * Creates a new VideoFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoFrame instance
         */
        public static create(properties?: croissantbit.IVideoFrame): croissantbit.VideoFrame;

        /**
         * Encodes the specified VideoFrame message. Does not implicitly {@link croissantbit.VideoFrame.verify|verify} messages.
         * @param message VideoFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: croissantbit.IVideoFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoFrame message, length delimited. Does not implicitly {@link croissantbit.VideoFrame.verify|verify} messages.
         * @param message VideoFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: croissantbit.IVideoFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): croissantbit.VideoFrame;

        /**
         * Decodes a VideoFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): croissantbit.VideoFrame;

        /**
         * Verifies a VideoFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VideoFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VideoFrame
         */
        public static fromObject(object: { [k: string]: any }): croissantbit.VideoFrame;

        /**
         * Creates a plain object from a VideoFrame message. Also converts values to other types if specified.
         * @param message VideoFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: croissantbit.VideoFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VideoFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VideoFrame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VideoInfo. */
    interface IVideoInfo {

        /** VideoInfo width */
        width?: (number|null);

        /** VideoInfo height */
        height?: (number|null);

        /** VideoInfo fps */
        fps?: (number|null);

        /** VideoInfo colorDepth */
        colorDepth?: (number|null);
    }

    /** Represents a VideoInfo. */
    class VideoInfo implements IVideoInfo {

        /**
         * Constructs a new VideoInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: croissantbit.IVideoInfo);

        /** VideoInfo width. */
        public width: number;

        /** VideoInfo height. */
        public height: number;

        /** VideoInfo fps. */
        public fps: number;

        /** VideoInfo colorDepth. */
        public colorDepth: number;

        /**
         * Creates a new VideoInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoInfo instance
         */
        public static create(properties?: croissantbit.IVideoInfo): croissantbit.VideoInfo;

        /**
         * Encodes the specified VideoInfo message. Does not implicitly {@link croissantbit.VideoInfo.verify|verify} messages.
         * @param message VideoInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: croissantbit.IVideoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoInfo message, length delimited. Does not implicitly {@link croissantbit.VideoInfo.verify|verify} messages.
         * @param message VideoInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: croissantbit.IVideoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): croissantbit.VideoInfo;

        /**
         * Decodes a VideoInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): croissantbit.VideoInfo;

        /**
         * Verifies a VideoInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VideoInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VideoInfo
         */
        public static fromObject(object: { [k: string]: any }): croissantbit.VideoInfo;

        /**
         * Creates a plain object from a VideoInfo message. Also converts values to other types if specified.
         * @param message VideoInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: croissantbit.VideoInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VideoInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VideoInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AudioInfo. */
    interface IAudioInfo {

        /** AudioInfo bitrate */
        bitrate?: (number|null);

        /** AudioInfo channels */
        channels?: (number|null);

        /** AudioInfo sampleRate */
        sampleRate?: (number|null);
    }

    /** Represents an AudioInfo. */
    class AudioInfo implements IAudioInfo {

        /**
         * Constructs a new AudioInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: croissantbit.IAudioInfo);

        /** AudioInfo bitrate. */
        public bitrate: number;

        /** AudioInfo channels. */
        public channels: number;

        /** AudioInfo sampleRate. */
        public sampleRate: number;

        /**
         * Creates a new AudioInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AudioInfo instance
         */
        public static create(properties?: croissantbit.IAudioInfo): croissantbit.AudioInfo;

        /**
         * Encodes the specified AudioInfo message. Does not implicitly {@link croissantbit.AudioInfo.verify|verify} messages.
         * @param message AudioInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: croissantbit.IAudioInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AudioInfo message, length delimited. Does not implicitly {@link croissantbit.AudioInfo.verify|verify} messages.
         * @param message AudioInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: croissantbit.IAudioInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AudioInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AudioInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): croissantbit.AudioInfo;

        /**
         * Decodes an AudioInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AudioInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): croissantbit.AudioInfo;

        /**
         * Verifies an AudioInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AudioInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AudioInfo
         */
        public static fromObject(object: { [k: string]: any }): croissantbit.AudioInfo;

        /**
         * Creates a plain object from an AudioInfo message. Also converts values to other types if specified.
         * @param message AudioInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: croissantbit.AudioInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AudioInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AudioInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VideoFrameFull. */
    interface IVideoFrameFull {

        /** VideoFrameFull data */
        data?: (Uint8Array|null);
    }

    /** Represents a VideoFrameFull. */
    class VideoFrameFull implements IVideoFrameFull {

        /**
         * Constructs a new VideoFrameFull.
         * @param [properties] Properties to set
         */
        constructor(properties?: croissantbit.IVideoFrameFull);

        /** VideoFrameFull data. */
        public data: Uint8Array;

        /**
         * Creates a new VideoFrameFull instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoFrameFull instance
         */
        public static create(properties?: croissantbit.IVideoFrameFull): croissantbit.VideoFrameFull;

        /**
         * Encodes the specified VideoFrameFull message. Does not implicitly {@link croissantbit.VideoFrameFull.verify|verify} messages.
         * @param message VideoFrameFull message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: croissantbit.IVideoFrameFull, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoFrameFull message, length delimited. Does not implicitly {@link croissantbit.VideoFrameFull.verify|verify} messages.
         * @param message VideoFrameFull message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: croissantbit.IVideoFrameFull, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoFrameFull message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoFrameFull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): croissantbit.VideoFrameFull;

        /**
         * Decodes a VideoFrameFull message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoFrameFull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): croissantbit.VideoFrameFull;

        /**
         * Verifies a VideoFrameFull message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VideoFrameFull message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VideoFrameFull
         */
        public static fromObject(object: { [k: string]: any }): croissantbit.VideoFrameFull;

        /**
         * Creates a plain object from a VideoFrameFull message. Also converts values to other types if specified.
         * @param message VideoFrameFull
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: croissantbit.VideoFrameFull, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VideoFrameFull to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VideoFrameFull
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VideoFramePartial. */
    interface IVideoFramePartial {

        /** VideoFramePartial pixels */
        pixels?: (croissantbit.IPixel[]|null);
    }

    /** Represents a VideoFramePartial. */
    class VideoFramePartial implements IVideoFramePartial {

        /**
         * Constructs a new VideoFramePartial.
         * @param [properties] Properties to set
         */
        constructor(properties?: croissantbit.IVideoFramePartial);

        /** VideoFramePartial pixels. */
        public pixels: croissantbit.IPixel[];

        /**
         * Creates a new VideoFramePartial instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoFramePartial instance
         */
        public static create(properties?: croissantbit.IVideoFramePartial): croissantbit.VideoFramePartial;

        /**
         * Encodes the specified VideoFramePartial message. Does not implicitly {@link croissantbit.VideoFramePartial.verify|verify} messages.
         * @param message VideoFramePartial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: croissantbit.IVideoFramePartial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoFramePartial message, length delimited. Does not implicitly {@link croissantbit.VideoFramePartial.verify|verify} messages.
         * @param message VideoFramePartial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: croissantbit.IVideoFramePartial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoFramePartial message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoFramePartial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): croissantbit.VideoFramePartial;

        /**
         * Decodes a VideoFramePartial message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoFramePartial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): croissantbit.VideoFramePartial;

        /**
         * Verifies a VideoFramePartial message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VideoFramePartial message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VideoFramePartial
         */
        public static fromObject(object: { [k: string]: any }): croissantbit.VideoFramePartial;

        /**
         * Creates a plain object from a VideoFramePartial message. Also converts values to other types if specified.
         * @param message VideoFramePartial
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: croissantbit.VideoFramePartial, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VideoFramePartial to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VideoFramePartial
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Pixel. */
    interface IPixel {

        /** Pixel x */
        x?: (number|null);

        /** Pixel y */
        y?: (number|null);

        /** Pixel data */
        data?: (Uint8Array|null);
    }

    /** Represents a Pixel. */
    class Pixel implements IPixel {

        /**
         * Constructs a new Pixel.
         * @param [properties] Properties to set
         */
        constructor(properties?: croissantbit.IPixel);

        /** Pixel x. */
        public x: number;

        /** Pixel y. */
        public y: number;

        /** Pixel data. */
        public data: Uint8Array;

        /**
         * Creates a new Pixel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pixel instance
         */
        public static create(properties?: croissantbit.IPixel): croissantbit.Pixel;

        /**
         * Encodes the specified Pixel message. Does not implicitly {@link croissantbit.Pixel.verify|verify} messages.
         * @param message Pixel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: croissantbit.IPixel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pixel message, length delimited. Does not implicitly {@link croissantbit.Pixel.verify|verify} messages.
         * @param message Pixel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: croissantbit.IPixel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pixel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pixel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): croissantbit.Pixel;

        /**
         * Decodes a Pixel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pixel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): croissantbit.Pixel;

        /**
         * Verifies a Pixel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pixel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pixel
         */
        public static fromObject(object: { [k: string]: any }): croissantbit.Pixel;

        /**
         * Creates a plain object from a Pixel message. Also converts values to other types if specified.
         * @param message Pixel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: croissantbit.Pixel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pixel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Pixel
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
