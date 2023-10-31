/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const croissantbit = $root.croissantbit = (() => {

    /**
     * Namespace croissantbit.
     * @exports croissantbit
     * @namespace
     */
    const croissantbit = {};

    croissantbit.Ping = (function() {

        /**
         * Properties of a Ping.
         * @memberof croissantbit
         * @interface IPing
         */

        /**
         * Constructs a new Ping.
         * @memberof croissantbit
         * @classdesc Represents a Ping.
         * @implements IPing
         * @constructor
         * @param {croissantbit.IPing=} [properties] Properties to set
         */
        function Ping(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Ping instance using the specified properties.
         * @function create
         * @memberof croissantbit.Ping
         * @static
         * @param {croissantbit.IPing=} [properties] Properties to set
         * @returns {croissantbit.Ping} Ping instance
         */
        Ping.create = function create(properties) {
            return new Ping(properties);
        };

        /**
         * Encodes the specified Ping message. Does not implicitly {@link croissantbit.Ping.verify|verify} messages.
         * @function encode
         * @memberof croissantbit.Ping
         * @static
         * @param {croissantbit.IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link croissantbit.Ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof croissantbit.Ping
         * @static
         * @param {croissantbit.IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @function decode
         * @memberof croissantbit.Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {croissantbit.Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.croissantbit.Ping();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof croissantbit.Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {croissantbit.Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Ping message.
         * @function verify
         * @memberof croissantbit.Ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof croissantbit.Ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {croissantbit.Ping} Ping
         */
        Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.croissantbit.Ping)
                return object;
            return new $root.croissantbit.Ping();
        };

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof croissantbit.Ping
         * @static
         * @param {croissantbit.Ping} message Ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ping.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Ping to JSON.
         * @function toJSON
         * @memberof croissantbit.Ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ping
         * @function getTypeUrl
         * @memberof croissantbit.Ping
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/croissantbit.Ping";
        };

        return Ping;
    })();

    croissantbit.Pong = (function() {

        /**
         * Properties of a Pong.
         * @memberof croissantbit
         * @interface IPong
         */

        /**
         * Constructs a new Pong.
         * @memberof croissantbit
         * @classdesc Represents a Pong.
         * @implements IPong
         * @constructor
         * @param {croissantbit.IPong=} [properties] Properties to set
         */
        function Pong(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Pong instance using the specified properties.
         * @function create
         * @memberof croissantbit.Pong
         * @static
         * @param {croissantbit.IPong=} [properties] Properties to set
         * @returns {croissantbit.Pong} Pong instance
         */
        Pong.create = function create(properties) {
            return new Pong(properties);
        };

        /**
         * Encodes the specified Pong message. Does not implicitly {@link croissantbit.Pong.verify|verify} messages.
         * @function encode
         * @memberof croissantbit.Pong
         * @static
         * @param {croissantbit.IPong} message Pong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link croissantbit.Pong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof croissantbit.Pong
         * @static
         * @param {croissantbit.IPong} message Pong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @function decode
         * @memberof croissantbit.Pong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {croissantbit.Pong} Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.croissantbit.Pong();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof croissantbit.Pong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {croissantbit.Pong} Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pong message.
         * @function verify
         * @memberof croissantbit.Pong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof croissantbit.Pong
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {croissantbit.Pong} Pong
         */
        Pong.fromObject = function fromObject(object) {
            if (object instanceof $root.croissantbit.Pong)
                return object;
            return new $root.croissantbit.Pong();
        };

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @function toObject
         * @memberof croissantbit.Pong
         * @static
         * @param {croissantbit.Pong} message Pong
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pong.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Pong to JSON.
         * @function toJSON
         * @memberof croissantbit.Pong
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Pong
         * @function getTypeUrl
         * @memberof croissantbit.Pong
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Pong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/croissantbit.Pong";
        };

        return Pong;
    })();

    croissantbit.RegisterClient = (function() {

        /**
         * Properties of a RegisterClient.
         * @memberof croissantbit
         * @interface IRegisterClient
         * @property {croissantbit.IVideoInfo|null} [videoInfo] RegisterClient videoInfo
         * @property {croissantbit.IAudioInfo|null} [audioInfo] RegisterClient audioInfo
         */

        /**
         * Constructs a new RegisterClient.
         * @memberof croissantbit
         * @classdesc Represents a RegisterClient.
         * @implements IRegisterClient
         * @constructor
         * @param {croissantbit.IRegisterClient=} [properties] Properties to set
         */
        function RegisterClient(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterClient videoInfo.
         * @member {croissantbit.IVideoInfo|null|undefined} videoInfo
         * @memberof croissantbit.RegisterClient
         * @instance
         */
        RegisterClient.prototype.videoInfo = null;

        /**
         * RegisterClient audioInfo.
         * @member {croissantbit.IAudioInfo|null|undefined} audioInfo
         * @memberof croissantbit.RegisterClient
         * @instance
         */
        RegisterClient.prototype.audioInfo = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * RegisterClient _videoInfo.
         * @member {"videoInfo"|undefined} _videoInfo
         * @memberof croissantbit.RegisterClient
         * @instance
         */
        Object.defineProperty(RegisterClient.prototype, "_videoInfo", {
            get: $util.oneOfGetter($oneOfFields = ["videoInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * RegisterClient _audioInfo.
         * @member {"audioInfo"|undefined} _audioInfo
         * @memberof croissantbit.RegisterClient
         * @instance
         */
        Object.defineProperty(RegisterClient.prototype, "_audioInfo", {
            get: $util.oneOfGetter($oneOfFields = ["audioInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RegisterClient instance using the specified properties.
         * @function create
         * @memberof croissantbit.RegisterClient
         * @static
         * @param {croissantbit.IRegisterClient=} [properties] Properties to set
         * @returns {croissantbit.RegisterClient} RegisterClient instance
         */
        RegisterClient.create = function create(properties) {
            return new RegisterClient(properties);
        };

        /**
         * Encodes the specified RegisterClient message. Does not implicitly {@link croissantbit.RegisterClient.verify|verify} messages.
         * @function encode
         * @memberof croissantbit.RegisterClient
         * @static
         * @param {croissantbit.IRegisterClient} message RegisterClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.videoInfo != null && Object.hasOwnProperty.call(message, "videoInfo"))
                $root.croissantbit.VideoInfo.encode(message.videoInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.audioInfo != null && Object.hasOwnProperty.call(message, "audioInfo"))
                $root.croissantbit.AudioInfo.encode(message.audioInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RegisterClient message, length delimited. Does not implicitly {@link croissantbit.RegisterClient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof croissantbit.RegisterClient
         * @static
         * @param {croissantbit.IRegisterClient} message RegisterClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterClient message from the specified reader or buffer.
         * @function decode
         * @memberof croissantbit.RegisterClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {croissantbit.RegisterClient} RegisterClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterClient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.croissantbit.RegisterClient();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.videoInfo = $root.croissantbit.VideoInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.audioInfo = $root.croissantbit.AudioInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterClient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof croissantbit.RegisterClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {croissantbit.RegisterClient} RegisterClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterClient message.
         * @function verify
         * @memberof croissantbit.RegisterClient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.videoInfo != null && message.hasOwnProperty("videoInfo")) {
                properties._videoInfo = 1;
                {
                    let error = $root.croissantbit.VideoInfo.verify(message.videoInfo);
                    if (error)
                        return "videoInfo." + error;
                }
            }
            if (message.audioInfo != null && message.hasOwnProperty("audioInfo")) {
                properties._audioInfo = 1;
                {
                    let error = $root.croissantbit.AudioInfo.verify(message.audioInfo);
                    if (error)
                        return "audioInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RegisterClient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof croissantbit.RegisterClient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {croissantbit.RegisterClient} RegisterClient
         */
        RegisterClient.fromObject = function fromObject(object) {
            if (object instanceof $root.croissantbit.RegisterClient)
                return object;
            let message = new $root.croissantbit.RegisterClient();
            if (object.videoInfo != null) {
                if (typeof object.videoInfo !== "object")
                    throw TypeError(".croissantbit.RegisterClient.videoInfo: object expected");
                message.videoInfo = $root.croissantbit.VideoInfo.fromObject(object.videoInfo);
            }
            if (object.audioInfo != null) {
                if (typeof object.audioInfo !== "object")
                    throw TypeError(".croissantbit.RegisterClient.audioInfo: object expected");
                message.audioInfo = $root.croissantbit.AudioInfo.fromObject(object.audioInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a RegisterClient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof croissantbit.RegisterClient
         * @static
         * @param {croissantbit.RegisterClient} message RegisterClient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.videoInfo != null && message.hasOwnProperty("videoInfo")) {
                object.videoInfo = $root.croissantbit.VideoInfo.toObject(message.videoInfo, options);
                if (options.oneofs)
                    object._videoInfo = "videoInfo";
            }
            if (message.audioInfo != null && message.hasOwnProperty("audioInfo")) {
                object.audioInfo = $root.croissantbit.AudioInfo.toObject(message.audioInfo, options);
                if (options.oneofs)
                    object._audioInfo = "audioInfo";
            }
            return object;
        };

        /**
         * Converts this RegisterClient to JSON.
         * @function toJSON
         * @memberof croissantbit.RegisterClient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterClient
         * @function getTypeUrl
         * @memberof croissantbit.RegisterClient
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterClient.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/croissantbit.RegisterClient";
        };

        return RegisterClient;
    })();

    croissantbit.RegisterClientResponse = (function() {

        /**
         * Properties of a RegisterClientResponse.
         * @memberof croissantbit
         * @interface IRegisterClientResponse
         * @property {number|null} [clientId] RegisterClientResponse clientId
         */

        /**
         * Constructs a new RegisterClientResponse.
         * @memberof croissantbit
         * @classdesc Represents a RegisterClientResponse.
         * @implements IRegisterClientResponse
         * @constructor
         * @param {croissantbit.IRegisterClientResponse=} [properties] Properties to set
         */
        function RegisterClientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterClientResponse clientId.
         * @member {number|null|undefined} clientId
         * @memberof croissantbit.RegisterClientResponse
         * @instance
         */
        RegisterClientResponse.prototype.clientId = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * RegisterClientResponse _clientId.
         * @member {"clientId"|undefined} _clientId
         * @memberof croissantbit.RegisterClientResponse
         * @instance
         */
        Object.defineProperty(RegisterClientResponse.prototype, "_clientId", {
            get: $util.oneOfGetter($oneOfFields = ["clientId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RegisterClientResponse instance using the specified properties.
         * @function create
         * @memberof croissantbit.RegisterClientResponse
         * @static
         * @param {croissantbit.IRegisterClientResponse=} [properties] Properties to set
         * @returns {croissantbit.RegisterClientResponse} RegisterClientResponse instance
         */
        RegisterClientResponse.create = function create(properties) {
            return new RegisterClientResponse(properties);
        };

        /**
         * Encodes the specified RegisterClientResponse message. Does not implicitly {@link croissantbit.RegisterClientResponse.verify|verify} messages.
         * @function encode
         * @memberof croissantbit.RegisterClientResponse
         * @static
         * @param {croissantbit.IRegisterClientResponse} message RegisterClientResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterClientResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientId);
            return writer;
        };

        /**
         * Encodes the specified RegisterClientResponse message, length delimited. Does not implicitly {@link croissantbit.RegisterClientResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof croissantbit.RegisterClientResponse
         * @static
         * @param {croissantbit.IRegisterClientResponse} message RegisterClientResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterClientResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterClientResponse message from the specified reader or buffer.
         * @function decode
         * @memberof croissantbit.RegisterClientResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {croissantbit.RegisterClientResponse} RegisterClientResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterClientResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.croissantbit.RegisterClientResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.clientId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterClientResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof croissantbit.RegisterClientResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {croissantbit.RegisterClientResponse} RegisterClientResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterClientResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterClientResponse message.
         * @function verify
         * @memberof croissantbit.RegisterClientResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterClientResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.clientId != null && message.hasOwnProperty("clientId")) {
                properties._clientId = 1;
                if (!$util.isInteger(message.clientId))
                    return "clientId: integer expected";
            }
            return null;
        };

        /**
         * Creates a RegisterClientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof croissantbit.RegisterClientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {croissantbit.RegisterClientResponse} RegisterClientResponse
         */
        RegisterClientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.croissantbit.RegisterClientResponse)
                return object;
            let message = new $root.croissantbit.RegisterClientResponse();
            if (object.clientId != null)
                message.clientId = object.clientId | 0;
            return message;
        };

        /**
         * Creates a plain object from a RegisterClientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof croissantbit.RegisterClientResponse
         * @static
         * @param {croissantbit.RegisterClientResponse} message RegisterClientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterClientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.clientId != null && message.hasOwnProperty("clientId")) {
                object.clientId = message.clientId;
                if (options.oneofs)
                    object._clientId = "clientId";
            }
            return object;
        };

        /**
         * Converts this RegisterClientResponse to JSON.
         * @function toJSON
         * @memberof croissantbit.RegisterClientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterClientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterClientResponse
         * @function getTypeUrl
         * @memberof croissantbit.RegisterClientResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterClientResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/croissantbit.RegisterClientResponse";
        };

        return RegisterClientResponse;
    })();

    croissantbit.VideoFrame = (function() {

        /**
         * Properties of a VideoFrame.
         * @memberof croissantbit
         * @interface IVideoFrame
         * @property {croissantbit.IVideoFrameFull|null} [full] VideoFrame full
         * @property {croissantbit.IVideoFramePartial|null} [partial] VideoFrame partial
         */

        /**
         * Constructs a new VideoFrame.
         * @memberof croissantbit
         * @classdesc Represents a VideoFrame.
         * @implements IVideoFrame
         * @constructor
         * @param {croissantbit.IVideoFrame=} [properties] Properties to set
         */
        function VideoFrame(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VideoFrame full.
         * @member {croissantbit.IVideoFrameFull|null|undefined} full
         * @memberof croissantbit.VideoFrame
         * @instance
         */
        VideoFrame.prototype.full = null;

        /**
         * VideoFrame partial.
         * @member {croissantbit.IVideoFramePartial|null|undefined} partial
         * @memberof croissantbit.VideoFrame
         * @instance
         */
        VideoFrame.prototype.partial = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * VideoFrame payload.
         * @member {"full"|"partial"|undefined} payload
         * @memberof croissantbit.VideoFrame
         * @instance
         */
        Object.defineProperty(VideoFrame.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["full", "partial"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new VideoFrame instance using the specified properties.
         * @function create
         * @memberof croissantbit.VideoFrame
         * @static
         * @param {croissantbit.IVideoFrame=} [properties] Properties to set
         * @returns {croissantbit.VideoFrame} VideoFrame instance
         */
        VideoFrame.create = function create(properties) {
            return new VideoFrame(properties);
        };

        /**
         * Encodes the specified VideoFrame message. Does not implicitly {@link croissantbit.VideoFrame.verify|verify} messages.
         * @function encode
         * @memberof croissantbit.VideoFrame
         * @static
         * @param {croissantbit.IVideoFrame} message VideoFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.full != null && Object.hasOwnProperty.call(message, "full"))
                $root.croissantbit.VideoFrameFull.encode(message.full, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.partial != null && Object.hasOwnProperty.call(message, "partial"))
                $root.croissantbit.VideoFramePartial.encode(message.partial, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VideoFrame message, length delimited. Does not implicitly {@link croissantbit.VideoFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof croissantbit.VideoFrame
         * @static
         * @param {croissantbit.IVideoFrame} message VideoFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoFrame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoFrame message from the specified reader or buffer.
         * @function decode
         * @memberof croissantbit.VideoFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {croissantbit.VideoFrame} VideoFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.croissantbit.VideoFrame();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.full = $root.croissantbit.VideoFrameFull.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.partial = $root.croissantbit.VideoFramePartial.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VideoFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof croissantbit.VideoFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {croissantbit.VideoFrame} VideoFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoFrame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoFrame message.
         * @function verify
         * @memberof croissantbit.VideoFrame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoFrame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.full != null && message.hasOwnProperty("full")) {
                properties.payload = 1;
                {
                    let error = $root.croissantbit.VideoFrameFull.verify(message.full);
                    if (error)
                        return "full." + error;
                }
            }
            if (message.partial != null && message.hasOwnProperty("partial")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.croissantbit.VideoFramePartial.verify(message.partial);
                    if (error)
                        return "partial." + error;
                }
            }
            return null;
        };

        /**
         * Creates a VideoFrame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof croissantbit.VideoFrame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {croissantbit.VideoFrame} VideoFrame
         */
        VideoFrame.fromObject = function fromObject(object) {
            if (object instanceof $root.croissantbit.VideoFrame)
                return object;
            let message = new $root.croissantbit.VideoFrame();
            if (object.full != null) {
                if (typeof object.full !== "object")
                    throw TypeError(".croissantbit.VideoFrame.full: object expected");
                message.full = $root.croissantbit.VideoFrameFull.fromObject(object.full);
            }
            if (object.partial != null) {
                if (typeof object.partial !== "object")
                    throw TypeError(".croissantbit.VideoFrame.partial: object expected");
                message.partial = $root.croissantbit.VideoFramePartial.fromObject(object.partial);
            }
            return message;
        };

        /**
         * Creates a plain object from a VideoFrame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof croissantbit.VideoFrame
         * @static
         * @param {croissantbit.VideoFrame} message VideoFrame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoFrame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.full != null && message.hasOwnProperty("full")) {
                object.full = $root.croissantbit.VideoFrameFull.toObject(message.full, options);
                if (options.oneofs)
                    object.payload = "full";
            }
            if (message.partial != null && message.hasOwnProperty("partial")) {
                object.partial = $root.croissantbit.VideoFramePartial.toObject(message.partial, options);
                if (options.oneofs)
                    object.payload = "partial";
            }
            return object;
        };

        /**
         * Converts this VideoFrame to JSON.
         * @function toJSON
         * @memberof croissantbit.VideoFrame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoFrame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VideoFrame
         * @function getTypeUrl
         * @memberof croissantbit.VideoFrame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VideoFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/croissantbit.VideoFrame";
        };

        return VideoFrame;
    })();

    croissantbit.VideoInfo = (function() {

        /**
         * Properties of a VideoInfo.
         * @memberof croissantbit
         * @interface IVideoInfo
         * @property {number|null} [width] VideoInfo width
         * @property {number|null} [height] VideoInfo height
         * @property {number|null} [fps] VideoInfo fps
         * @property {number|null} [colorDepth] VideoInfo colorDepth
         */

        /**
         * Constructs a new VideoInfo.
         * @memberof croissantbit
         * @classdesc Represents a VideoInfo.
         * @implements IVideoInfo
         * @constructor
         * @param {croissantbit.IVideoInfo=} [properties] Properties to set
         */
        function VideoInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VideoInfo width.
         * @member {number} width
         * @memberof croissantbit.VideoInfo
         * @instance
         */
        VideoInfo.prototype.width = 0;

        /**
         * VideoInfo height.
         * @member {number} height
         * @memberof croissantbit.VideoInfo
         * @instance
         */
        VideoInfo.prototype.height = 0;

        /**
         * VideoInfo fps.
         * @member {number} fps
         * @memberof croissantbit.VideoInfo
         * @instance
         */
        VideoInfo.prototype.fps = 0;

        /**
         * VideoInfo colorDepth.
         * @member {number} colorDepth
         * @memberof croissantbit.VideoInfo
         * @instance
         */
        VideoInfo.prototype.colorDepth = 0;

        /**
         * Creates a new VideoInfo instance using the specified properties.
         * @function create
         * @memberof croissantbit.VideoInfo
         * @static
         * @param {croissantbit.IVideoInfo=} [properties] Properties to set
         * @returns {croissantbit.VideoInfo} VideoInfo instance
         */
        VideoInfo.create = function create(properties) {
            return new VideoInfo(properties);
        };

        /**
         * Encodes the specified VideoInfo message. Does not implicitly {@link croissantbit.VideoInfo.verify|verify} messages.
         * @function encode
         * @memberof croissantbit.VideoInfo
         * @static
         * @param {croissantbit.IVideoInfo} message VideoInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
            if (message.fps != null && Object.hasOwnProperty.call(message, "fps"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fps);
            if (message.colorDepth != null && Object.hasOwnProperty.call(message, "colorDepth"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.colorDepth);
            return writer;
        };

        /**
         * Encodes the specified VideoInfo message, length delimited. Does not implicitly {@link croissantbit.VideoInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof croissantbit.VideoInfo
         * @static
         * @param {croissantbit.IVideoInfo} message VideoInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoInfo message from the specified reader or buffer.
         * @function decode
         * @memberof croissantbit.VideoInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {croissantbit.VideoInfo} VideoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.croissantbit.VideoInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.width = reader.int32();
                        break;
                    }
                case 2: {
                        message.height = reader.int32();
                        break;
                    }
                case 3: {
                        message.fps = reader.int32();
                        break;
                    }
                case 4: {
                        message.colorDepth = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VideoInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof croissantbit.VideoInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {croissantbit.VideoInfo} VideoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoInfo message.
         * @function verify
         * @memberof croissantbit.VideoInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.fps != null && message.hasOwnProperty("fps"))
                if (!$util.isInteger(message.fps))
                    return "fps: integer expected";
            if (message.colorDepth != null && message.hasOwnProperty("colorDepth"))
                if (!$util.isInteger(message.colorDepth))
                    return "colorDepth: integer expected";
            return null;
        };

        /**
         * Creates a VideoInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof croissantbit.VideoInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {croissantbit.VideoInfo} VideoInfo
         */
        VideoInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.croissantbit.VideoInfo)
                return object;
            let message = new $root.croissantbit.VideoInfo();
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            if (object.fps != null)
                message.fps = object.fps | 0;
            if (object.colorDepth != null)
                message.colorDepth = object.colorDepth | 0;
            return message;
        };

        /**
         * Creates a plain object from a VideoInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof croissantbit.VideoInfo
         * @static
         * @param {croissantbit.VideoInfo} message VideoInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
                object.fps = 0;
                object.colorDepth = 0;
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.fps != null && message.hasOwnProperty("fps"))
                object.fps = message.fps;
            if (message.colorDepth != null && message.hasOwnProperty("colorDepth"))
                object.colorDepth = message.colorDepth;
            return object;
        };

        /**
         * Converts this VideoInfo to JSON.
         * @function toJSON
         * @memberof croissantbit.VideoInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VideoInfo
         * @function getTypeUrl
         * @memberof croissantbit.VideoInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VideoInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/croissantbit.VideoInfo";
        };

        return VideoInfo;
    })();

    croissantbit.AudioInfo = (function() {

        /**
         * Properties of an AudioInfo.
         * @memberof croissantbit
         * @interface IAudioInfo
         * @property {number|null} [bitrate] AudioInfo bitrate
         * @property {number|null} [channels] AudioInfo channels
         * @property {number|null} [sampleRate] AudioInfo sampleRate
         */

        /**
         * Constructs a new AudioInfo.
         * @memberof croissantbit
         * @classdesc Represents an AudioInfo.
         * @implements IAudioInfo
         * @constructor
         * @param {croissantbit.IAudioInfo=} [properties] Properties to set
         */
        function AudioInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AudioInfo bitrate.
         * @member {number} bitrate
         * @memberof croissantbit.AudioInfo
         * @instance
         */
        AudioInfo.prototype.bitrate = 0;

        /**
         * AudioInfo channels.
         * @member {number} channels
         * @memberof croissantbit.AudioInfo
         * @instance
         */
        AudioInfo.prototype.channels = 0;

        /**
         * AudioInfo sampleRate.
         * @member {number} sampleRate
         * @memberof croissantbit.AudioInfo
         * @instance
         */
        AudioInfo.prototype.sampleRate = 0;

        /**
         * Creates a new AudioInfo instance using the specified properties.
         * @function create
         * @memberof croissantbit.AudioInfo
         * @static
         * @param {croissantbit.IAudioInfo=} [properties] Properties to set
         * @returns {croissantbit.AudioInfo} AudioInfo instance
         */
        AudioInfo.create = function create(properties) {
            return new AudioInfo(properties);
        };

        /**
         * Encodes the specified AudioInfo message. Does not implicitly {@link croissantbit.AudioInfo.verify|verify} messages.
         * @function encode
         * @memberof croissantbit.AudioInfo
         * @static
         * @param {croissantbit.IAudioInfo} message AudioInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AudioInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bitrate != null && Object.hasOwnProperty.call(message, "bitrate"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bitrate);
            if (message.channels != null && Object.hasOwnProperty.call(message, "channels"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.channels);
            if (message.sampleRate != null && Object.hasOwnProperty.call(message, "sampleRate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sampleRate);
            return writer;
        };

        /**
         * Encodes the specified AudioInfo message, length delimited. Does not implicitly {@link croissantbit.AudioInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof croissantbit.AudioInfo
         * @static
         * @param {croissantbit.IAudioInfo} message AudioInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AudioInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AudioInfo message from the specified reader or buffer.
         * @function decode
         * @memberof croissantbit.AudioInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {croissantbit.AudioInfo} AudioInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AudioInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.croissantbit.AudioInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bitrate = reader.int32();
                        break;
                    }
                case 2: {
                        message.channels = reader.int32();
                        break;
                    }
                case 3: {
                        message.sampleRate = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AudioInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof croissantbit.AudioInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {croissantbit.AudioInfo} AudioInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AudioInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AudioInfo message.
         * @function verify
         * @memberof croissantbit.AudioInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AudioInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bitrate != null && message.hasOwnProperty("bitrate"))
                if (!$util.isInteger(message.bitrate))
                    return "bitrate: integer expected";
            if (message.channels != null && message.hasOwnProperty("channels"))
                if (!$util.isInteger(message.channels))
                    return "channels: integer expected";
            if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                if (!$util.isInteger(message.sampleRate))
                    return "sampleRate: integer expected";
            return null;
        };

        /**
         * Creates an AudioInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof croissantbit.AudioInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {croissantbit.AudioInfo} AudioInfo
         */
        AudioInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.croissantbit.AudioInfo)
                return object;
            let message = new $root.croissantbit.AudioInfo();
            if (object.bitrate != null)
                message.bitrate = object.bitrate | 0;
            if (object.channels != null)
                message.channels = object.channels | 0;
            if (object.sampleRate != null)
                message.sampleRate = object.sampleRate | 0;
            return message;
        };

        /**
         * Creates a plain object from an AudioInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof croissantbit.AudioInfo
         * @static
         * @param {croissantbit.AudioInfo} message AudioInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AudioInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bitrate = 0;
                object.channels = 0;
                object.sampleRate = 0;
            }
            if (message.bitrate != null && message.hasOwnProperty("bitrate"))
                object.bitrate = message.bitrate;
            if (message.channels != null && message.hasOwnProperty("channels"))
                object.channels = message.channels;
            if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                object.sampleRate = message.sampleRate;
            return object;
        };

        /**
         * Converts this AudioInfo to JSON.
         * @function toJSON
         * @memberof croissantbit.AudioInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AudioInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AudioInfo
         * @function getTypeUrl
         * @memberof croissantbit.AudioInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AudioInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/croissantbit.AudioInfo";
        };

        return AudioInfo;
    })();

    croissantbit.VideoFrameFull = (function() {

        /**
         * Properties of a VideoFrameFull.
         * @memberof croissantbit
         * @interface IVideoFrameFull
         * @property {Uint8Array|null} [data] VideoFrameFull data
         */

        /**
         * Constructs a new VideoFrameFull.
         * @memberof croissantbit
         * @classdesc Represents a VideoFrameFull.
         * @implements IVideoFrameFull
         * @constructor
         * @param {croissantbit.IVideoFrameFull=} [properties] Properties to set
         */
        function VideoFrameFull(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VideoFrameFull data.
         * @member {Uint8Array} data
         * @memberof croissantbit.VideoFrameFull
         * @instance
         */
        VideoFrameFull.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new VideoFrameFull instance using the specified properties.
         * @function create
         * @memberof croissantbit.VideoFrameFull
         * @static
         * @param {croissantbit.IVideoFrameFull=} [properties] Properties to set
         * @returns {croissantbit.VideoFrameFull} VideoFrameFull instance
         */
        VideoFrameFull.create = function create(properties) {
            return new VideoFrameFull(properties);
        };

        /**
         * Encodes the specified VideoFrameFull message. Does not implicitly {@link croissantbit.VideoFrameFull.verify|verify} messages.
         * @function encode
         * @memberof croissantbit.VideoFrameFull
         * @static
         * @param {croissantbit.IVideoFrameFull} message VideoFrameFull message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoFrameFull.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified VideoFrameFull message, length delimited. Does not implicitly {@link croissantbit.VideoFrameFull.verify|verify} messages.
         * @function encodeDelimited
         * @memberof croissantbit.VideoFrameFull
         * @static
         * @param {croissantbit.IVideoFrameFull} message VideoFrameFull message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoFrameFull.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoFrameFull message from the specified reader or buffer.
         * @function decode
         * @memberof croissantbit.VideoFrameFull
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {croissantbit.VideoFrameFull} VideoFrameFull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoFrameFull.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.croissantbit.VideoFrameFull();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VideoFrameFull message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof croissantbit.VideoFrameFull
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {croissantbit.VideoFrameFull} VideoFrameFull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoFrameFull.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoFrameFull message.
         * @function verify
         * @memberof croissantbit.VideoFrameFull
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoFrameFull.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a VideoFrameFull message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof croissantbit.VideoFrameFull
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {croissantbit.VideoFrameFull} VideoFrameFull
         */
        VideoFrameFull.fromObject = function fromObject(object) {
            if (object instanceof $root.croissantbit.VideoFrameFull)
                return object;
            let message = new $root.croissantbit.VideoFrameFull();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a VideoFrameFull message. Also converts values to other types if specified.
         * @function toObject
         * @memberof croissantbit.VideoFrameFull
         * @static
         * @param {croissantbit.VideoFrameFull} message VideoFrameFull
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoFrameFull.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this VideoFrameFull to JSON.
         * @function toJSON
         * @memberof croissantbit.VideoFrameFull
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoFrameFull.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VideoFrameFull
         * @function getTypeUrl
         * @memberof croissantbit.VideoFrameFull
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VideoFrameFull.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/croissantbit.VideoFrameFull";
        };

        return VideoFrameFull;
    })();

    croissantbit.VideoFramePartial = (function() {

        /**
         * Properties of a VideoFramePartial.
         * @memberof croissantbit
         * @interface IVideoFramePartial
         * @property {Array.<croissantbit.IPixel>|null} [pixels] VideoFramePartial pixels
         */

        /**
         * Constructs a new VideoFramePartial.
         * @memberof croissantbit
         * @classdesc Represents a VideoFramePartial.
         * @implements IVideoFramePartial
         * @constructor
         * @param {croissantbit.IVideoFramePartial=} [properties] Properties to set
         */
        function VideoFramePartial(properties) {
            this.pixels = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VideoFramePartial pixels.
         * @member {Array.<croissantbit.IPixel>} pixels
         * @memberof croissantbit.VideoFramePartial
         * @instance
         */
        VideoFramePartial.prototype.pixels = $util.emptyArray;

        /**
         * Creates a new VideoFramePartial instance using the specified properties.
         * @function create
         * @memberof croissantbit.VideoFramePartial
         * @static
         * @param {croissantbit.IVideoFramePartial=} [properties] Properties to set
         * @returns {croissantbit.VideoFramePartial} VideoFramePartial instance
         */
        VideoFramePartial.create = function create(properties) {
            return new VideoFramePartial(properties);
        };

        /**
         * Encodes the specified VideoFramePartial message. Does not implicitly {@link croissantbit.VideoFramePartial.verify|verify} messages.
         * @function encode
         * @memberof croissantbit.VideoFramePartial
         * @static
         * @param {croissantbit.IVideoFramePartial} message VideoFramePartial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoFramePartial.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pixels != null && message.pixels.length)
                for (let i = 0; i < message.pixels.length; ++i)
                    $root.croissantbit.Pixel.encode(message.pixels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VideoFramePartial message, length delimited. Does not implicitly {@link croissantbit.VideoFramePartial.verify|verify} messages.
         * @function encodeDelimited
         * @memberof croissantbit.VideoFramePartial
         * @static
         * @param {croissantbit.IVideoFramePartial} message VideoFramePartial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoFramePartial.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoFramePartial message from the specified reader or buffer.
         * @function decode
         * @memberof croissantbit.VideoFramePartial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {croissantbit.VideoFramePartial} VideoFramePartial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoFramePartial.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.croissantbit.VideoFramePartial();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.pixels && message.pixels.length))
                            message.pixels = [];
                        message.pixels.push($root.croissantbit.Pixel.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VideoFramePartial message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof croissantbit.VideoFramePartial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {croissantbit.VideoFramePartial} VideoFramePartial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoFramePartial.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoFramePartial message.
         * @function verify
         * @memberof croissantbit.VideoFramePartial
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoFramePartial.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pixels != null && message.hasOwnProperty("pixels")) {
                if (!Array.isArray(message.pixels))
                    return "pixels: array expected";
                for (let i = 0; i < message.pixels.length; ++i) {
                    let error = $root.croissantbit.Pixel.verify(message.pixels[i]);
                    if (error)
                        return "pixels." + error;
                }
            }
            return null;
        };

        /**
         * Creates a VideoFramePartial message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof croissantbit.VideoFramePartial
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {croissantbit.VideoFramePartial} VideoFramePartial
         */
        VideoFramePartial.fromObject = function fromObject(object) {
            if (object instanceof $root.croissantbit.VideoFramePartial)
                return object;
            let message = new $root.croissantbit.VideoFramePartial();
            if (object.pixels) {
                if (!Array.isArray(object.pixels))
                    throw TypeError(".croissantbit.VideoFramePartial.pixels: array expected");
                message.pixels = [];
                for (let i = 0; i < object.pixels.length; ++i) {
                    if (typeof object.pixels[i] !== "object")
                        throw TypeError(".croissantbit.VideoFramePartial.pixels: object expected");
                    message.pixels[i] = $root.croissantbit.Pixel.fromObject(object.pixels[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a VideoFramePartial message. Also converts values to other types if specified.
         * @function toObject
         * @memberof croissantbit.VideoFramePartial
         * @static
         * @param {croissantbit.VideoFramePartial} message VideoFramePartial
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoFramePartial.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.pixels = [];
            if (message.pixels && message.pixels.length) {
                object.pixels = [];
                for (let j = 0; j < message.pixels.length; ++j)
                    object.pixels[j] = $root.croissantbit.Pixel.toObject(message.pixels[j], options);
            }
            return object;
        };

        /**
         * Converts this VideoFramePartial to JSON.
         * @function toJSON
         * @memberof croissantbit.VideoFramePartial
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoFramePartial.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VideoFramePartial
         * @function getTypeUrl
         * @memberof croissantbit.VideoFramePartial
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VideoFramePartial.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/croissantbit.VideoFramePartial";
        };

        return VideoFramePartial;
    })();

    croissantbit.Pixel = (function() {

        /**
         * Properties of a Pixel.
         * @memberof croissantbit
         * @interface IPixel
         * @property {number|null} [x] Pixel x
         * @property {number|null} [y] Pixel y
         * @property {Uint8Array|null} [data] Pixel data
         */

        /**
         * Constructs a new Pixel.
         * @memberof croissantbit
         * @classdesc Represents a Pixel.
         * @implements IPixel
         * @constructor
         * @param {croissantbit.IPixel=} [properties] Properties to set
         */
        function Pixel(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pixel x.
         * @member {number} x
         * @memberof croissantbit.Pixel
         * @instance
         */
        Pixel.prototype.x = 0;

        /**
         * Pixel y.
         * @member {number} y
         * @memberof croissantbit.Pixel
         * @instance
         */
        Pixel.prototype.y = 0;

        /**
         * Pixel data.
         * @member {Uint8Array} data
         * @memberof croissantbit.Pixel
         * @instance
         */
        Pixel.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Pixel instance using the specified properties.
         * @function create
         * @memberof croissantbit.Pixel
         * @static
         * @param {croissantbit.IPixel=} [properties] Properties to set
         * @returns {croissantbit.Pixel} Pixel instance
         */
        Pixel.create = function create(properties) {
            return new Pixel(properties);
        };

        /**
         * Encodes the specified Pixel message. Does not implicitly {@link croissantbit.Pixel.verify|verify} messages.
         * @function encode
         * @memberof croissantbit.Pixel
         * @static
         * @param {croissantbit.IPixel} message Pixel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pixel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Pixel message, length delimited. Does not implicitly {@link croissantbit.Pixel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof croissantbit.Pixel
         * @static
         * @param {croissantbit.IPixel} message Pixel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pixel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pixel message from the specified reader or buffer.
         * @function decode
         * @memberof croissantbit.Pixel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {croissantbit.Pixel} Pixel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pixel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.croissantbit.Pixel();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.int32();
                        break;
                    }
                case 2: {
                        message.y = reader.int32();
                        break;
                    }
                case 3: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pixel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof croissantbit.Pixel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {croissantbit.Pixel} Pixel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pixel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pixel message.
         * @function verify
         * @memberof croissantbit.Pixel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pixel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a Pixel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof croissantbit.Pixel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {croissantbit.Pixel} Pixel
         */
        Pixel.fromObject = function fromObject(object) {
            if (object instanceof $root.croissantbit.Pixel)
                return object;
            let message = new $root.croissantbit.Pixel();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a Pixel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof croissantbit.Pixel
         * @static
         * @param {croissantbit.Pixel} message Pixel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pixel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Pixel to JSON.
         * @function toJSON
         * @memberof croissantbit.Pixel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pixel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Pixel
         * @function getTypeUrl
         * @memberof croissantbit.Pixel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Pixel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/croissantbit.Pixel";
        };

        return Pixel;
    })();

    return croissantbit;
})();

export { $root as default };
