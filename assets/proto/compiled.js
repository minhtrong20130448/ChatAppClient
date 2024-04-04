/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(window || global).proto = (function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.proto = (function() {
    
        /**
         * Namespace proto.
         * @exports proto
         * @namespace
         */
        var proto = {};
    
        proto.PacketWrapper = (function() {
    
            /**
             * Properties of a PacketWrapper.
             * @memberof proto
             * @interface IPacketWrapper
             * @property {Array.<proto.IPacket>|null} [packet] PacketWrapper packet
             */
    
            /**
             * Constructs a new PacketWrapper.
             * @memberof proto
             * @classdesc Represents a PacketWrapper.
             * @implements IPacketWrapper
             * @constructor
             * @param {proto.IPacketWrapper=} [properties] Properties to set
             */
            function PacketWrapper(properties) {
                this.packet = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PacketWrapper packet.
             * @member {Array.<proto.IPacket>} packet
             * @memberof proto.PacketWrapper
             * @instance
             */
            PacketWrapper.prototype.packet = $util.emptyArray;
    
            /**
             * Creates a new PacketWrapper instance using the specified properties.
             * @function create
             * @memberof proto.PacketWrapper
             * @static
             * @param {proto.IPacketWrapper=} [properties] Properties to set
             * @returns {proto.PacketWrapper} PacketWrapper instance
             */
            PacketWrapper.create = function create(properties) {
                return new PacketWrapper(properties);
            };
    
            /**
             * Encodes the specified PacketWrapper message. Does not implicitly {@link proto.PacketWrapper.verify|verify} messages.
             * @function encode
             * @memberof proto.PacketWrapper
             * @static
             * @param {proto.IPacketWrapper} message PacketWrapper message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PacketWrapper.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.packet != null && message.packet.length)
                    for (var i = 0; i < message.packet.length; ++i)
                        $root.proto.Packet.encode(message.packet[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PacketWrapper message, length delimited. Does not implicitly {@link proto.PacketWrapper.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PacketWrapper
             * @static
             * @param {proto.IPacketWrapper} message PacketWrapper message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PacketWrapper.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PacketWrapper message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PacketWrapper
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PacketWrapper} PacketWrapper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PacketWrapper.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PacketWrapper();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.packet && message.packet.length))
                                message.packet = [];
                            message.packet.push($root.proto.Packet.decode(reader, reader.uint32()));
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
             * Decodes a PacketWrapper message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PacketWrapper
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PacketWrapper} PacketWrapper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PacketWrapper.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PacketWrapper message.
             * @function verify
             * @memberof proto.PacketWrapper
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PacketWrapper.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.packet != null && message.hasOwnProperty("packet")) {
                    if (!Array.isArray(message.packet))
                        return "packet: array expected";
                    for (var i = 0; i < message.packet.length; ++i) {
                        var error = $root.proto.Packet.verify(message.packet[i]);
                        if (error)
                            return "packet." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a PacketWrapper message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PacketWrapper
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PacketWrapper} PacketWrapper
             */
            PacketWrapper.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PacketWrapper)
                    return object;
                var message = new $root.proto.PacketWrapper();
                if (object.packet) {
                    if (!Array.isArray(object.packet))
                        throw TypeError(".proto.PacketWrapper.packet: array expected");
                    message.packet = [];
                    for (var i = 0; i < object.packet.length; ++i) {
                        if (typeof object.packet[i] !== "object")
                            throw TypeError(".proto.PacketWrapper.packet: object expected");
                        message.packet[i] = $root.proto.Packet.fromObject(object.packet[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PacketWrapper message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PacketWrapper
             * @static
             * @param {proto.PacketWrapper} message PacketWrapper
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PacketWrapper.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.packet = [];
                if (message.packet && message.packet.length) {
                    object.packet = [];
                    for (var j = 0; j < message.packet.length; ++j)
                        object.packet[j] = $root.proto.Packet.toObject(message.packet[j], options);
                }
                return object;
            };
    
            /**
             * Converts this PacketWrapper to JSON.
             * @function toJSON
             * @memberof proto.PacketWrapper
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PacketWrapper.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for PacketWrapper
             * @function getTypeUrl
             * @memberof proto.PacketWrapper
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PacketWrapper.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PacketWrapper";
            };
    
            return PacketWrapper;
        })();
    
        proto.FriendList = (function() {
    
            /**
             * Properties of a FriendList.
             * @memberof proto
             * @interface IFriendList
             * @property {Array.<proto.IFriend>|null} [friends] FriendList friends
             */
    
            /**
             * Constructs a new FriendList.
             * @memberof proto
             * @classdesc Represents a FriendList.
             * @implements IFriendList
             * @constructor
             * @param {proto.IFriendList=} [properties] Properties to set
             */
            function FriendList(properties) {
                this.friends = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FriendList friends.
             * @member {Array.<proto.IFriend>} friends
             * @memberof proto.FriendList
             * @instance
             */
            FriendList.prototype.friends = $util.emptyArray;
    
            /**
             * Creates a new FriendList instance using the specified properties.
             * @function create
             * @memberof proto.FriendList
             * @static
             * @param {proto.IFriendList=} [properties] Properties to set
             * @returns {proto.FriendList} FriendList instance
             */
            FriendList.create = function create(properties) {
                return new FriendList(properties);
            };
    
            /**
             * Encodes the specified FriendList message. Does not implicitly {@link proto.FriendList.verify|verify} messages.
             * @function encode
             * @memberof proto.FriendList
             * @static
             * @param {proto.IFriendList} message FriendList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FriendList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.friends != null && message.friends.length)
                    for (var i = 0; i < message.friends.length; ++i)
                        $root.proto.Friend.encode(message.friends[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified FriendList message, length delimited. Does not implicitly {@link proto.FriendList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.FriendList
             * @static
             * @param {proto.IFriendList} message FriendList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FriendList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FriendList message from the specified reader or buffer.
             * @function decode
             * @memberof proto.FriendList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.FriendList} FriendList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FriendList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FriendList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.friends && message.friends.length))
                                message.friends = [];
                            message.friends.push($root.proto.Friend.decode(reader, reader.uint32()));
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
             * Decodes a FriendList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.FriendList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.FriendList} FriendList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FriendList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FriendList message.
             * @function verify
             * @memberof proto.FriendList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FriendList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.friends != null && message.hasOwnProperty("friends")) {
                    if (!Array.isArray(message.friends))
                        return "friends: array expected";
                    for (var i = 0; i < message.friends.length; ++i) {
                        var error = $root.proto.Friend.verify(message.friends[i]);
                        if (error)
                            return "friends." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a FriendList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.FriendList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.FriendList} FriendList
             */
            FriendList.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.FriendList)
                    return object;
                var message = new $root.proto.FriendList();
                if (object.friends) {
                    if (!Array.isArray(object.friends))
                        throw TypeError(".proto.FriendList.friends: array expected");
                    message.friends = [];
                    for (var i = 0; i < object.friends.length; ++i) {
                        if (typeof object.friends[i] !== "object")
                            throw TypeError(".proto.FriendList.friends: object expected");
                        message.friends[i] = $root.proto.Friend.fromObject(object.friends[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a FriendList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.FriendList
             * @static
             * @param {proto.FriendList} message FriendList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FriendList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.friends = [];
                if (message.friends && message.friends.length) {
                    object.friends = [];
                    for (var j = 0; j < message.friends.length; ++j)
                        object.friends[j] = $root.proto.Friend.toObject(message.friends[j], options);
                }
                return object;
            };
    
            /**
             * Converts this FriendList to JSON.
             * @function toJSON
             * @memberof proto.FriendList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FriendList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for FriendList
             * @function getTypeUrl
             * @memberof proto.FriendList
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FriendList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.FriendList";
            };
    
            return FriendList;
        })();
    
        proto.MessageList = (function() {
    
            /**
             * Properties of a MessageList.
             * @memberof proto
             * @interface IMessageList
             * @property {Array.<proto.IMessage>|null} [messages] MessageList messages
             */
    
            /**
             * Constructs a new MessageList.
             * @memberof proto
             * @classdesc Represents a MessageList.
             * @implements IMessageList
             * @constructor
             * @param {proto.IMessageList=} [properties] Properties to set
             */
            function MessageList(properties) {
                this.messages = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MessageList messages.
             * @member {Array.<proto.IMessage>} messages
             * @memberof proto.MessageList
             * @instance
             */
            MessageList.prototype.messages = $util.emptyArray;
    
            /**
             * Creates a new MessageList instance using the specified properties.
             * @function create
             * @memberof proto.MessageList
             * @static
             * @param {proto.IMessageList=} [properties] Properties to set
             * @returns {proto.MessageList} MessageList instance
             */
            MessageList.create = function create(properties) {
                return new MessageList(properties);
            };
    
            /**
             * Encodes the specified MessageList message. Does not implicitly {@link proto.MessageList.verify|verify} messages.
             * @function encode
             * @memberof proto.MessageList
             * @static
             * @param {proto.IMessageList} message MessageList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messages != null && message.messages.length)
                    for (var i = 0; i < message.messages.length; ++i)
                        $root.proto.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified MessageList message, length delimited. Does not implicitly {@link proto.MessageList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.MessageList
             * @static
             * @param {proto.IMessageList} message MessageList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MessageList message from the specified reader or buffer.
             * @function decode
             * @memberof proto.MessageList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.MessageList} MessageList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.MessageList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.messages && message.messages.length))
                                message.messages = [];
                            message.messages.push($root.proto.Message.decode(reader, reader.uint32()));
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
             * Decodes a MessageList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.MessageList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.MessageList} MessageList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MessageList message.
             * @function verify
             * @memberof proto.MessageList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messages != null && message.hasOwnProperty("messages")) {
                    if (!Array.isArray(message.messages))
                        return "messages: array expected";
                    for (var i = 0; i < message.messages.length; ++i) {
                        var error = $root.proto.Message.verify(message.messages[i]);
                        if (error)
                            return "messages." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a MessageList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.MessageList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.MessageList} MessageList
             */
            MessageList.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.MessageList)
                    return object;
                var message = new $root.proto.MessageList();
                if (object.messages) {
                    if (!Array.isArray(object.messages))
                        throw TypeError(".proto.MessageList.messages: array expected");
                    message.messages = [];
                    for (var i = 0; i < object.messages.length; ++i) {
                        if (typeof object.messages[i] !== "object")
                            throw TypeError(".proto.MessageList.messages: object expected");
                        message.messages[i] = $root.proto.Message.fromObject(object.messages[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MessageList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.MessageList
             * @static
             * @param {proto.MessageList} message MessageList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.messages = [];
                if (message.messages && message.messages.length) {
                    object.messages = [];
                    for (var j = 0; j < message.messages.length; ++j)
                        object.messages[j] = $root.proto.Message.toObject(message.messages[j], options);
                }
                return object;
            };
    
            /**
             * Converts this MessageList to JSON.
             * @function toJSON
             * @memberof proto.MessageList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for MessageList
             * @function getTypeUrl
             * @memberof proto.MessageList
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MessageList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.MessageList";
            };
    
            return MessageList;
        })();
    
        proto.Packet = (function() {
    
            /**
             * Properties of a Packet.
             * @memberof proto
             * @interface IPacket
             * @property {proto.IReqLogin|null} [reqLogin] Packet reqLogin
             * @property {proto.IResLogin|null} [resLogin] Packet resLogin
             * @property {proto.IMessage|null} [reqMessage] Packet reqMessage
             * @property {proto.IMessage|null} [resMessage] Packet resMessage
             * @property {proto.IReqAddFriend|null} [reqAddFriend] Packet reqAddFriend
             * @property {proto.IResAddFriend|null} [resAddFriend] Packet resAddFriend
             * @property {proto.IReqSignin|null} [reqSignin] Packet reqSignin
             * @property {proto.IResSignin|null} [resSignin] Packet resSignin
             * @property {proto.IReqLogout|null} [reqLogout] Packet reqLogout
             * @property {string|null} [reqLoadFriends] Packet reqLoadFriends
             * @property {proto.IFriendList|null} [friendlist] Packet friendlist
             * @property {proto.IReqLoadMessage|null} [reqLoadMessage] Packet reqLoadMessage
             * @property {proto.IMessageList|null} [messageList] Packet messageList
             */
    
            /**
             * Constructs a new Packet.
             * @memberof proto
             * @classdesc Represents a Packet.
             * @implements IPacket
             * @constructor
             * @param {proto.IPacket=} [properties] Properties to set
             */
            function Packet(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Packet reqLogin.
             * @member {proto.IReqLogin|null|undefined} reqLogin
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.reqLogin = null;
    
            /**
             * Packet resLogin.
             * @member {proto.IResLogin|null|undefined} resLogin
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.resLogin = null;
    
            /**
             * Packet reqMessage.
             * @member {proto.IMessage|null|undefined} reqMessage
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.reqMessage = null;
    
            /**
             * Packet resMessage.
             * @member {proto.IMessage|null|undefined} resMessage
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.resMessage = null;
    
            /**
             * Packet reqAddFriend.
             * @member {proto.IReqAddFriend|null|undefined} reqAddFriend
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.reqAddFriend = null;
    
            /**
             * Packet resAddFriend.
             * @member {proto.IResAddFriend|null|undefined} resAddFriend
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.resAddFriend = null;
    
            /**
             * Packet reqSignin.
             * @member {proto.IReqSignin|null|undefined} reqSignin
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.reqSignin = null;
    
            /**
             * Packet resSignin.
             * @member {proto.IResSignin|null|undefined} resSignin
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.resSignin = null;
    
            /**
             * Packet reqLogout.
             * @member {proto.IReqLogout|null|undefined} reqLogout
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.reqLogout = null;
    
            /**
             * Packet reqLoadFriends.
             * @member {string|null|undefined} reqLoadFriends
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.reqLoadFriends = null;
    
            /**
             * Packet friendlist.
             * @member {proto.IFriendList|null|undefined} friendlist
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.friendlist = null;
    
            /**
             * Packet reqLoadMessage.
             * @member {proto.IReqLoadMessage|null|undefined} reqLoadMessage
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.reqLoadMessage = null;
    
            /**
             * Packet messageList.
             * @member {proto.IMessageList|null|undefined} messageList
             * @memberof proto.Packet
             * @instance
             */
            Packet.prototype.messageList = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Packet data.
             * @member {"reqLogin"|"resLogin"|"reqMessage"|"resMessage"|"reqAddFriend"|"resAddFriend"|"reqSignin"|"resSignin"|"reqLogout"|"reqLoadFriends"|"friendlist"|"reqLoadMessage"|"messageList"|undefined} data
             * @memberof proto.Packet
             * @instance
             */
            Object.defineProperty(Packet.prototype, "data", {
                get: $util.oneOfGetter($oneOfFields = ["reqLogin", "resLogin", "reqMessage", "resMessage", "reqAddFriend", "resAddFriend", "reqSignin", "resSignin", "reqLogout", "reqLoadFriends", "friendlist", "reqLoadMessage", "messageList"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Packet instance using the specified properties.
             * @function create
             * @memberof proto.Packet
             * @static
             * @param {proto.IPacket=} [properties] Properties to set
             * @returns {proto.Packet} Packet instance
             */
            Packet.create = function create(properties) {
                return new Packet(properties);
            };
    
            /**
             * Encodes the specified Packet message. Does not implicitly {@link proto.Packet.verify|verify} messages.
             * @function encode
             * @memberof proto.Packet
             * @static
             * @param {proto.IPacket} message Packet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Packet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.reqLogin != null && Object.hasOwnProperty.call(message, "reqLogin"))
                    $root.proto.ReqLogin.encode(message.reqLogin, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.resLogin != null && Object.hasOwnProperty.call(message, "resLogin"))
                    $root.proto.ResLogin.encode(message.resLogin, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.reqMessage != null && Object.hasOwnProperty.call(message, "reqMessage"))
                    $root.proto.Message.encode(message.reqMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.resMessage != null && Object.hasOwnProperty.call(message, "resMessage"))
                    $root.proto.Message.encode(message.resMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.reqAddFriend != null && Object.hasOwnProperty.call(message, "reqAddFriend"))
                    $root.proto.ReqAddFriend.encode(message.reqAddFriend, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.resAddFriend != null && Object.hasOwnProperty.call(message, "resAddFriend"))
                    $root.proto.ResAddFriend.encode(message.resAddFriend, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.reqSignin != null && Object.hasOwnProperty.call(message, "reqSignin"))
                    $root.proto.ReqSignin.encode(message.reqSignin, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.resSignin != null && Object.hasOwnProperty.call(message, "resSignin"))
                    $root.proto.ResSignin.encode(message.resSignin, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reqLogout != null && Object.hasOwnProperty.call(message, "reqLogout"))
                    $root.proto.ReqLogout.encode(message.reqLogout, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reqLoadFriends != null && Object.hasOwnProperty.call(message, "reqLoadFriends"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.reqLoadFriends);
                if (message.friendlist != null && Object.hasOwnProperty.call(message, "friendlist"))
                    $root.proto.FriendList.encode(message.friendlist, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.reqLoadMessage != null && Object.hasOwnProperty.call(message, "reqLoadMessage"))
                    $root.proto.ReqLoadMessage.encode(message.reqLoadMessage, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.messageList != null && Object.hasOwnProperty.call(message, "messageList"))
                    $root.proto.MessageList.encode(message.messageList, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Packet message, length delimited. Does not implicitly {@link proto.Packet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Packet
             * @static
             * @param {proto.IPacket} message Packet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Packet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Packet message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Packet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Packet} Packet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Packet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Packet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.reqLogin = $root.proto.ReqLogin.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.resLogin = $root.proto.ResLogin.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.reqMessage = $root.proto.Message.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.resMessage = $root.proto.Message.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.reqAddFriend = $root.proto.ReqAddFriend.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.resAddFriend = $root.proto.ResAddFriend.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.reqSignin = $root.proto.ReqSignin.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.resSignin = $root.proto.ResSignin.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.reqLogout = $root.proto.ReqLogout.decode(reader, reader.uint32());
                            break;
                        }
                    case 10: {
                            message.reqLoadFriends = reader.string();
                            break;
                        }
                    case 11: {
                            message.friendlist = $root.proto.FriendList.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.reqLoadMessage = $root.proto.ReqLoadMessage.decode(reader, reader.uint32());
                            break;
                        }
                    case 13: {
                            message.messageList = $root.proto.MessageList.decode(reader, reader.uint32());
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
             * Decodes a Packet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Packet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Packet} Packet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Packet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Packet message.
             * @function verify
             * @memberof proto.Packet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Packet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.reqLogin != null && message.hasOwnProperty("reqLogin")) {
                    properties.data = 1;
                    {
                        var error = $root.proto.ReqLogin.verify(message.reqLogin);
                        if (error)
                            return "reqLogin." + error;
                    }
                }
                if (message.resLogin != null && message.hasOwnProperty("resLogin")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.ResLogin.verify(message.resLogin);
                        if (error)
                            return "resLogin." + error;
                    }
                }
                if (message.reqMessage != null && message.hasOwnProperty("reqMessage")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.Message.verify(message.reqMessage);
                        if (error)
                            return "reqMessage." + error;
                    }
                }
                if (message.resMessage != null && message.hasOwnProperty("resMessage")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.Message.verify(message.resMessage);
                        if (error)
                            return "resMessage." + error;
                    }
                }
                if (message.reqAddFriend != null && message.hasOwnProperty("reqAddFriend")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.ReqAddFriend.verify(message.reqAddFriend);
                        if (error)
                            return "reqAddFriend." + error;
                    }
                }
                if (message.resAddFriend != null && message.hasOwnProperty("resAddFriend")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.ResAddFriend.verify(message.resAddFriend);
                        if (error)
                            return "resAddFriend." + error;
                    }
                }
                if (message.reqSignin != null && message.hasOwnProperty("reqSignin")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.ReqSignin.verify(message.reqSignin);
                        if (error)
                            return "reqSignin." + error;
                    }
                }
                if (message.resSignin != null && message.hasOwnProperty("resSignin")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.ResSignin.verify(message.resSignin);
                        if (error)
                            return "resSignin." + error;
                    }
                }
                if (message.reqLogout != null && message.hasOwnProperty("reqLogout")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.ReqLogout.verify(message.reqLogout);
                        if (error)
                            return "reqLogout." + error;
                    }
                }
                if (message.reqLoadFriends != null && message.hasOwnProperty("reqLoadFriends")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    if (!$util.isString(message.reqLoadFriends))
                        return "reqLoadFriends: string expected";
                }
                if (message.friendlist != null && message.hasOwnProperty("friendlist")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.FriendList.verify(message.friendlist);
                        if (error)
                            return "friendlist." + error;
                    }
                }
                if (message.reqLoadMessage != null && message.hasOwnProperty("reqLoadMessage")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.ReqLoadMessage.verify(message.reqLoadMessage);
                        if (error)
                            return "reqLoadMessage." + error;
                    }
                }
                if (message.messageList != null && message.hasOwnProperty("messageList")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        var error = $root.proto.MessageList.verify(message.messageList);
                        if (error)
                            return "messageList." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Packet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Packet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Packet} Packet
             */
            Packet.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Packet)
                    return object;
                var message = new $root.proto.Packet();
                if (object.reqLogin != null) {
                    if (typeof object.reqLogin !== "object")
                        throw TypeError(".proto.Packet.reqLogin: object expected");
                    message.reqLogin = $root.proto.ReqLogin.fromObject(object.reqLogin);
                }
                if (object.resLogin != null) {
                    if (typeof object.resLogin !== "object")
                        throw TypeError(".proto.Packet.resLogin: object expected");
                    message.resLogin = $root.proto.ResLogin.fromObject(object.resLogin);
                }
                if (object.reqMessage != null) {
                    if (typeof object.reqMessage !== "object")
                        throw TypeError(".proto.Packet.reqMessage: object expected");
                    message.reqMessage = $root.proto.Message.fromObject(object.reqMessage);
                }
                if (object.resMessage != null) {
                    if (typeof object.resMessage !== "object")
                        throw TypeError(".proto.Packet.resMessage: object expected");
                    message.resMessage = $root.proto.Message.fromObject(object.resMessage);
                }
                if (object.reqAddFriend != null) {
                    if (typeof object.reqAddFriend !== "object")
                        throw TypeError(".proto.Packet.reqAddFriend: object expected");
                    message.reqAddFriend = $root.proto.ReqAddFriend.fromObject(object.reqAddFriend);
                }
                if (object.resAddFriend != null) {
                    if (typeof object.resAddFriend !== "object")
                        throw TypeError(".proto.Packet.resAddFriend: object expected");
                    message.resAddFriend = $root.proto.ResAddFriend.fromObject(object.resAddFriend);
                }
                if (object.reqSignin != null) {
                    if (typeof object.reqSignin !== "object")
                        throw TypeError(".proto.Packet.reqSignin: object expected");
                    message.reqSignin = $root.proto.ReqSignin.fromObject(object.reqSignin);
                }
                if (object.resSignin != null) {
                    if (typeof object.resSignin !== "object")
                        throw TypeError(".proto.Packet.resSignin: object expected");
                    message.resSignin = $root.proto.ResSignin.fromObject(object.resSignin);
                }
                if (object.reqLogout != null) {
                    if (typeof object.reqLogout !== "object")
                        throw TypeError(".proto.Packet.reqLogout: object expected");
                    message.reqLogout = $root.proto.ReqLogout.fromObject(object.reqLogout);
                }
                if (object.reqLoadFriends != null)
                    message.reqLoadFriends = String(object.reqLoadFriends);
                if (object.friendlist != null) {
                    if (typeof object.friendlist !== "object")
                        throw TypeError(".proto.Packet.friendlist: object expected");
                    message.friendlist = $root.proto.FriendList.fromObject(object.friendlist);
                }
                if (object.reqLoadMessage != null) {
                    if (typeof object.reqLoadMessage !== "object")
                        throw TypeError(".proto.Packet.reqLoadMessage: object expected");
                    message.reqLoadMessage = $root.proto.ReqLoadMessage.fromObject(object.reqLoadMessage);
                }
                if (object.messageList != null) {
                    if (typeof object.messageList !== "object")
                        throw TypeError(".proto.Packet.messageList: object expected");
                    message.messageList = $root.proto.MessageList.fromObject(object.messageList);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Packet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Packet
             * @static
             * @param {proto.Packet} message Packet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Packet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.reqLogin != null && message.hasOwnProperty("reqLogin")) {
                    object.reqLogin = $root.proto.ReqLogin.toObject(message.reqLogin, options);
                    if (options.oneofs)
                        object.data = "reqLogin";
                }
                if (message.resLogin != null && message.hasOwnProperty("resLogin")) {
                    object.resLogin = $root.proto.ResLogin.toObject(message.resLogin, options);
                    if (options.oneofs)
                        object.data = "resLogin";
                }
                if (message.reqMessage != null && message.hasOwnProperty("reqMessage")) {
                    object.reqMessage = $root.proto.Message.toObject(message.reqMessage, options);
                    if (options.oneofs)
                        object.data = "reqMessage";
                }
                if (message.resMessage != null && message.hasOwnProperty("resMessage")) {
                    object.resMessage = $root.proto.Message.toObject(message.resMessage, options);
                    if (options.oneofs)
                        object.data = "resMessage";
                }
                if (message.reqAddFriend != null && message.hasOwnProperty("reqAddFriend")) {
                    object.reqAddFriend = $root.proto.ReqAddFriend.toObject(message.reqAddFriend, options);
                    if (options.oneofs)
                        object.data = "reqAddFriend";
                }
                if (message.resAddFriend != null && message.hasOwnProperty("resAddFriend")) {
                    object.resAddFriend = $root.proto.ResAddFriend.toObject(message.resAddFriend, options);
                    if (options.oneofs)
                        object.data = "resAddFriend";
                }
                if (message.reqSignin != null && message.hasOwnProperty("reqSignin")) {
                    object.reqSignin = $root.proto.ReqSignin.toObject(message.reqSignin, options);
                    if (options.oneofs)
                        object.data = "reqSignin";
                }
                if (message.resSignin != null && message.hasOwnProperty("resSignin")) {
                    object.resSignin = $root.proto.ResSignin.toObject(message.resSignin, options);
                    if (options.oneofs)
                        object.data = "resSignin";
                }
                if (message.reqLogout != null && message.hasOwnProperty("reqLogout")) {
                    object.reqLogout = $root.proto.ReqLogout.toObject(message.reqLogout, options);
                    if (options.oneofs)
                        object.data = "reqLogout";
                }
                if (message.reqLoadFriends != null && message.hasOwnProperty("reqLoadFriends")) {
                    object.reqLoadFriends = message.reqLoadFriends;
                    if (options.oneofs)
                        object.data = "reqLoadFriends";
                }
                if (message.friendlist != null && message.hasOwnProperty("friendlist")) {
                    object.friendlist = $root.proto.FriendList.toObject(message.friendlist, options);
                    if (options.oneofs)
                        object.data = "friendlist";
                }
                if (message.reqLoadMessage != null && message.hasOwnProperty("reqLoadMessage")) {
                    object.reqLoadMessage = $root.proto.ReqLoadMessage.toObject(message.reqLoadMessage, options);
                    if (options.oneofs)
                        object.data = "reqLoadMessage";
                }
                if (message.messageList != null && message.hasOwnProperty("messageList")) {
                    object.messageList = $root.proto.MessageList.toObject(message.messageList, options);
                    if (options.oneofs)
                        object.data = "messageList";
                }
                return object;
            };
    
            /**
             * Converts this Packet to JSON.
             * @function toJSON
             * @memberof proto.Packet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Packet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Packet
             * @function getTypeUrl
             * @memberof proto.Packet
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Packet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Packet";
            };
    
            return Packet;
        })();
    
        proto.User = (function() {
    
            /**
             * Properties of a User.
             * @memberof proto
             * @interface IUser
             * @property {number|null} [userId] User userId
             * @property {string|null} [username] User username
             * @property {string|null} [playerName] User playerName
             * @property {number|null} [gender] User gender
             * @property {number|null} [sponsor] User sponsor
             * @property {string|null} [email] User email
             * @property {string|null} [phone] User phone
             * @property {number|Long|null} [gold] User gold
             */
    
            /**
             * Constructs a new User.
             * @memberof proto
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {proto.IUser=} [properties] Properties to set
             */
            function User(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User userId.
             * @member {number} userId
             * @memberof proto.User
             * @instance
             */
            User.prototype.userId = 0;
    
            /**
             * User username.
             * @member {string} username
             * @memberof proto.User
             * @instance
             */
            User.prototype.username = "";
    
            /**
             * User playerName.
             * @member {string} playerName
             * @memberof proto.User
             * @instance
             */
            User.prototype.playerName = "";
    
            /**
             * User gender.
             * @member {number} gender
             * @memberof proto.User
             * @instance
             */
            User.prototype.gender = 0;
    
            /**
             * User sponsor.
             * @member {number} sponsor
             * @memberof proto.User
             * @instance
             */
            User.prototype.sponsor = 0;
    
            /**
             * User email.
             * @member {string} email
             * @memberof proto.User
             * @instance
             */
            User.prototype.email = "";
    
            /**
             * User phone.
             * @member {string} phone
             * @memberof proto.User
             * @instance
             */
            User.prototype.phone = "";
    
            /**
             * User gold.
             * @member {number|Long} gold
             * @memberof proto.User
             * @instance
             */
            User.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof proto.User
             * @static
             * @param {proto.IUser=} [properties] Properties to set
             * @returns {proto.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
    
            /**
             * Encodes the specified User message. Does not implicitly {@link proto.User.verify|verify} messages.
             * @function encode
             * @memberof proto.User
             * @static
             * @param {proto.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerName);
                if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gender);
                if (message.sponsor != null && Object.hasOwnProperty.call(message, "sponsor"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.sponsor);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.email);
                if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.phone);
                if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.gold);
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link proto.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.User
             * @static
             * @param {proto.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof proto.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.userId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.username = reader.string();
                            break;
                        }
                    case 3: {
                            message.playerName = reader.string();
                            break;
                        }
                    case 4: {
                            message.gender = reader.int32();
                            break;
                        }
                    case 5: {
                            message.sponsor = reader.int32();
                            break;
                        }
                    case 6: {
                            message.email = reader.string();
                            break;
                        }
                    case 7: {
                            message.phone = reader.string();
                            break;
                        }
                    case 8: {
                            message.gold = reader.int64();
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
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @function verify
             * @memberof proto.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.playerName != null && message.hasOwnProperty("playerName"))
                    if (!$util.isString(message.playerName))
                        return "playerName: string expected";
                if (message.gender != null && message.hasOwnProperty("gender"))
                    if (!$util.isInteger(message.gender))
                        return "gender: integer expected";
                if (message.sponsor != null && message.hasOwnProperty("sponsor"))
                    if (!$util.isInteger(message.sponsor))
                        return "sponsor: integer expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.phone != null && message.hasOwnProperty("phone"))
                    if (!$util.isString(message.phone))
                        return "phone: string expected";
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                        return "gold: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.User)
                    return object;
                var message = new $root.proto.User();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.username != null)
                    message.username = String(object.username);
                if (object.playerName != null)
                    message.playerName = String(object.playerName);
                if (object.gender != null)
                    message.gender = object.gender | 0;
                if (object.sponsor != null)
                    message.sponsor = object.sponsor | 0;
                if (object.email != null)
                    message.email = String(object.email);
                if (object.phone != null)
                    message.phone = String(object.phone);
                if (object.gold != null)
                    if ($util.Long)
                        (message.gold = $util.Long.fromValue(object.gold)).unsigned = false;
                    else if (typeof object.gold === "string")
                        message.gold = parseInt(object.gold, 10);
                    else if (typeof object.gold === "number")
                        message.gold = object.gold;
                    else if (typeof object.gold === "object")
                        message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.User
             * @static
             * @param {proto.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.username = "";
                    object.playerName = "";
                    object.gender = 0;
                    object.sponsor = 0;
                    object.email = "";
                    object.phone = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gold = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.playerName != null && message.hasOwnProperty("playerName"))
                    object.playerName = message.playerName;
                if (message.gender != null && message.hasOwnProperty("gender"))
                    object.gender = message.gender;
                if (message.sponsor != null && message.hasOwnProperty("sponsor"))
                    object.sponsor = message.sponsor;
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.phone != null && message.hasOwnProperty("phone"))
                    object.phone = message.phone;
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (typeof message.gold === "number")
                        object.gold = options.longs === String ? String(message.gold) : message.gold;
                    else
                        object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber() : message.gold;
                return object;
            };
    
            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof proto.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for User
             * @function getTypeUrl
             * @memberof proto.User
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.User";
            };
    
            return User;
        })();
    
        proto.Message = (function() {
    
            /**
             * Properties of a Message.
             * @memberof proto
             * @interface IMessage
             * @property {string|null} [userFrom] Message userFrom
             * @property {string|null} [userTo] Message userTo
             * @property {string|null} [content] Message content
             */
    
            /**
             * Constructs a new Message.
             * @memberof proto
             * @classdesc Represents a Message.
             * @implements IMessage
             * @constructor
             * @param {proto.IMessage=} [properties] Properties to set
             */
            function Message(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Message userFrom.
             * @member {string} userFrom
             * @memberof proto.Message
             * @instance
             */
            Message.prototype.userFrom = "";
    
            /**
             * Message userTo.
             * @member {string} userTo
             * @memberof proto.Message
             * @instance
             */
            Message.prototype.userTo = "";
    
            /**
             * Message content.
             * @member {string} content
             * @memberof proto.Message
             * @instance
             */
            Message.prototype.content = "";
    
            /**
             * Creates a new Message instance using the specified properties.
             * @function create
             * @memberof proto.Message
             * @static
             * @param {proto.IMessage=} [properties] Properties to set
             * @returns {proto.Message} Message instance
             */
            Message.create = function create(properties) {
                return new Message(properties);
            };
    
            /**
             * Encodes the specified Message message. Does not implicitly {@link proto.Message.verify|verify} messages.
             * @function encode
             * @memberof proto.Message
             * @static
             * @param {proto.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userFrom != null && Object.hasOwnProperty.call(message, "userFrom"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userFrom);
                if (message.userTo != null && Object.hasOwnProperty.call(message, "userTo"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.userTo);
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
                return writer;
            };
    
            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link proto.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Message
             * @static
             * @param {proto.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Message();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.userFrom = reader.string();
                            break;
                        }
                    case 2: {
                            message.userTo = reader.string();
                            break;
                        }
                    case 3: {
                            message.content = reader.string();
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
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Message message.
             * @function verify
             * @memberof proto.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userFrom != null && message.hasOwnProperty("userFrom"))
                    if (!$util.isString(message.userFrom))
                        return "userFrom: string expected";
                if (message.userTo != null && message.hasOwnProperty("userTo"))
                    if (!$util.isString(message.userTo))
                        return "userTo: string expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };
    
            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Message
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Message} Message
             */
            Message.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Message)
                    return object;
                var message = new $root.proto.Message();
                if (object.userFrom != null)
                    message.userFrom = String(object.userFrom);
                if (object.userTo != null)
                    message.userTo = String(object.userTo);
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };
    
            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Message
             * @static
             * @param {proto.Message} message Message
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userFrom = "";
                    object.userTo = "";
                    object.content = "";
                }
                if (message.userFrom != null && message.hasOwnProperty("userFrom"))
                    object.userFrom = message.userFrom;
                if (message.userTo != null && message.hasOwnProperty("userTo"))
                    object.userTo = message.userTo;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };
    
            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof proto.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Message
             * @function getTypeUrl
             * @memberof proto.Message
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message";
            };
    
            return Message;
        })();
    
        proto.ReqLogin = (function() {
    
            /**
             * Properties of a ReqLogin.
             * @memberof proto
             * @interface IReqLogin
             * @property {string|null} [username] ReqLogin username
             * @property {string|null} [password] ReqLogin password
             */
    
            /**
             * Constructs a new ReqLogin.
             * @memberof proto
             * @classdesc Represents a ReqLogin.
             * @implements IReqLogin
             * @constructor
             * @param {proto.IReqLogin=} [properties] Properties to set
             */
            function ReqLogin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReqLogin username.
             * @member {string} username
             * @memberof proto.ReqLogin
             * @instance
             */
            ReqLogin.prototype.username = "";
    
            /**
             * ReqLogin password.
             * @member {string} password
             * @memberof proto.ReqLogin
             * @instance
             */
            ReqLogin.prototype.password = "";
    
            /**
             * Creates a new ReqLogin instance using the specified properties.
             * @function create
             * @memberof proto.ReqLogin
             * @static
             * @param {proto.IReqLogin=} [properties] Properties to set
             * @returns {proto.ReqLogin} ReqLogin instance
             */
            ReqLogin.create = function create(properties) {
                return new ReqLogin(properties);
            };
    
            /**
             * Encodes the specified ReqLogin message. Does not implicitly {@link proto.ReqLogin.verify|verify} messages.
             * @function encode
             * @memberof proto.ReqLogin
             * @static
             * @param {proto.IReqLogin} message ReqLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqLogin.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };
    
            /**
             * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link proto.ReqLogin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ReqLogin
             * @static
             * @param {proto.IReqLogin} message ReqLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqLogin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ReqLogin message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ReqLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ReqLogin} ReqLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqLogin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqLogin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.password = reader.string();
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
             * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ReqLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ReqLogin} ReqLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqLogin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReqLogin message.
             * @function verify
             * @memberof proto.ReqLogin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqLogin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };
    
            /**
             * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ReqLogin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ReqLogin} ReqLogin
             */
            ReqLogin.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ReqLogin)
                    return object;
                var message = new $root.proto.ReqLogin();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };
    
            /**
             * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ReqLogin
             * @static
             * @param {proto.ReqLogin} message ReqLogin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqLogin.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.password = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };
    
            /**
             * Converts this ReqLogin to JSON.
             * @function toJSON
             * @memberof proto.ReqLogin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqLogin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ReqLogin
             * @function getTypeUrl
             * @memberof proto.ReqLogin
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReqLogin";
            };
    
            return ReqLogin;
        })();
    
        proto.ResLogin = (function() {
    
            /**
             * Properties of a ResLogin.
             * @memberof proto
             * @interface IResLogin
             * @property {number|null} [status] ResLogin status
             * @property {string|null} [token] ResLogin token
             * @property {string|null} [username] ResLogin username
             */
    
            /**
             * Constructs a new ResLogin.
             * @memberof proto
             * @classdesc Represents a ResLogin.
             * @implements IResLogin
             * @constructor
             * @param {proto.IResLogin=} [properties] Properties to set
             */
            function ResLogin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResLogin status.
             * @member {number} status
             * @memberof proto.ResLogin
             * @instance
             */
            ResLogin.prototype.status = 0;
    
            /**
             * ResLogin token.
             * @member {string} token
             * @memberof proto.ResLogin
             * @instance
             */
            ResLogin.prototype.token = "";
    
            /**
             * ResLogin username.
             * @member {string} username
             * @memberof proto.ResLogin
             * @instance
             */
            ResLogin.prototype.username = "";
    
            /**
             * Creates a new ResLogin instance using the specified properties.
             * @function create
             * @memberof proto.ResLogin
             * @static
             * @param {proto.IResLogin=} [properties] Properties to set
             * @returns {proto.ResLogin} ResLogin instance
             */
            ResLogin.create = function create(properties) {
                return new ResLogin(properties);
            };
    
            /**
             * Encodes the specified ResLogin message. Does not implicitly {@link proto.ResLogin.verify|verify} messages.
             * @function encode
             * @memberof proto.ResLogin
             * @static
             * @param {proto.IResLogin} message ResLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResLogin.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
                return writer;
            };
    
            /**
             * Encodes the specified ResLogin message, length delimited. Does not implicitly {@link proto.ResLogin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ResLogin
             * @static
             * @param {proto.IResLogin} message ResLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResLogin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResLogin message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ResLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ResLogin} ResLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResLogin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ResLogin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.status = reader.int32();
                            break;
                        }
                    case 2: {
                            message.token = reader.string();
                            break;
                        }
                    case 3: {
                            message.username = reader.string();
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
             * Decodes a ResLogin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ResLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ResLogin} ResLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResLogin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResLogin message.
             * @function verify
             * @memberof proto.ResLogin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResLogin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                return null;
            };
    
            /**
             * Creates a ResLogin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ResLogin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ResLogin} ResLogin
             */
            ResLogin.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ResLogin)
                    return object;
                var message = new $root.proto.ResLogin();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.token != null)
                    message.token = String(object.token);
                if (object.username != null)
                    message.username = String(object.username);
                return message;
            };
    
            /**
             * Creates a plain object from a ResLogin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ResLogin
             * @static
             * @param {proto.ResLogin} message ResLogin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResLogin.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.token = "";
                    object.username = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                return object;
            };
    
            /**
             * Converts this ResLogin to JSON.
             * @function toJSON
             * @memberof proto.ResLogin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResLogin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ResLogin
             * @function getTypeUrl
             * @memberof proto.ResLogin
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ResLogin";
            };
    
            return ResLogin;
        })();
    
        proto.ReqSignin = (function() {
    
            /**
             * Properties of a ReqSignin.
             * @memberof proto
             * @interface IReqSignin
             * @property {string|null} [username] ReqSignin username
             * @property {string|null} [password] ReqSignin password
             */
    
            /**
             * Constructs a new ReqSignin.
             * @memberof proto
             * @classdesc Represents a ReqSignin.
             * @implements IReqSignin
             * @constructor
             * @param {proto.IReqSignin=} [properties] Properties to set
             */
            function ReqSignin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReqSignin username.
             * @member {string} username
             * @memberof proto.ReqSignin
             * @instance
             */
            ReqSignin.prototype.username = "";
    
            /**
             * ReqSignin password.
             * @member {string} password
             * @memberof proto.ReqSignin
             * @instance
             */
            ReqSignin.prototype.password = "";
    
            /**
             * Creates a new ReqSignin instance using the specified properties.
             * @function create
             * @memberof proto.ReqSignin
             * @static
             * @param {proto.IReqSignin=} [properties] Properties to set
             * @returns {proto.ReqSignin} ReqSignin instance
             */
            ReqSignin.create = function create(properties) {
                return new ReqSignin(properties);
            };
    
            /**
             * Encodes the specified ReqSignin message. Does not implicitly {@link proto.ReqSignin.verify|verify} messages.
             * @function encode
             * @memberof proto.ReqSignin
             * @static
             * @param {proto.IReqSignin} message ReqSignin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqSignin.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };
    
            /**
             * Encodes the specified ReqSignin message, length delimited. Does not implicitly {@link proto.ReqSignin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ReqSignin
             * @static
             * @param {proto.IReqSignin} message ReqSignin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqSignin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ReqSignin message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ReqSignin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ReqSignin} ReqSignin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqSignin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqSignin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.password = reader.string();
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
             * Decodes a ReqSignin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ReqSignin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ReqSignin} ReqSignin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqSignin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReqSignin message.
             * @function verify
             * @memberof proto.ReqSignin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqSignin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };
    
            /**
             * Creates a ReqSignin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ReqSignin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ReqSignin} ReqSignin
             */
            ReqSignin.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ReqSignin)
                    return object;
                var message = new $root.proto.ReqSignin();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };
    
            /**
             * Creates a plain object from a ReqSignin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ReqSignin
             * @static
             * @param {proto.ReqSignin} message ReqSignin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqSignin.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.password = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };
    
            /**
             * Converts this ReqSignin to JSON.
             * @function toJSON
             * @memberof proto.ReqSignin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqSignin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ReqSignin
             * @function getTypeUrl
             * @memberof proto.ReqSignin
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqSignin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReqSignin";
            };
    
            return ReqSignin;
        })();
    
        proto.ResSignin = (function() {
    
            /**
             * Properties of a ResSignin.
             * @memberof proto
             * @interface IResSignin
             * @property {number|null} [status] ResSignin status
             * @property {string|null} [token] ResSignin token
             */
    
            /**
             * Constructs a new ResSignin.
             * @memberof proto
             * @classdesc Represents a ResSignin.
             * @implements IResSignin
             * @constructor
             * @param {proto.IResSignin=} [properties] Properties to set
             */
            function ResSignin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResSignin status.
             * @member {number} status
             * @memberof proto.ResSignin
             * @instance
             */
            ResSignin.prototype.status = 0;
    
            /**
             * ResSignin token.
             * @member {string} token
             * @memberof proto.ResSignin
             * @instance
             */
            ResSignin.prototype.token = "";
    
            /**
             * Creates a new ResSignin instance using the specified properties.
             * @function create
             * @memberof proto.ResSignin
             * @static
             * @param {proto.IResSignin=} [properties] Properties to set
             * @returns {proto.ResSignin} ResSignin instance
             */
            ResSignin.create = function create(properties) {
                return new ResSignin(properties);
            };
    
            /**
             * Encodes the specified ResSignin message. Does not implicitly {@link proto.ResSignin.verify|verify} messages.
             * @function encode
             * @memberof proto.ResSignin
             * @static
             * @param {proto.IResSignin} message ResSignin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResSignin.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                return writer;
            };
    
            /**
             * Encodes the specified ResSignin message, length delimited. Does not implicitly {@link proto.ResSignin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ResSignin
             * @static
             * @param {proto.IResSignin} message ResSignin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResSignin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResSignin message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ResSignin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ResSignin} ResSignin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResSignin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ResSignin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.status = reader.int32();
                            break;
                        }
                    case 2: {
                            message.token = reader.string();
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
             * Decodes a ResSignin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ResSignin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ResSignin} ResSignin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResSignin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResSignin message.
             * @function verify
             * @memberof proto.ResSignin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResSignin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };
    
            /**
             * Creates a ResSignin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ResSignin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ResSignin} ResSignin
             */
            ResSignin.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ResSignin)
                    return object;
                var message = new $root.proto.ResSignin();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };
    
            /**
             * Creates a plain object from a ResSignin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ResSignin
             * @static
             * @param {proto.ResSignin} message ResSignin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResSignin.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.token = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };
    
            /**
             * Converts this ResSignin to JSON.
             * @function toJSON
             * @memberof proto.ResSignin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResSignin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ResSignin
             * @function getTypeUrl
             * @memberof proto.ResSignin
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResSignin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ResSignin";
            };
    
            return ResSignin;
        })();
    
        proto.ReqAddFriend = (function() {
    
            /**
             * Properties of a ReqAddFriend.
             * @memberof proto
             * @interface IReqAddFriend
             * @property {string|null} [username] ReqAddFriend username
             * @property {string|null} [friendname] ReqAddFriend friendname
             */
    
            /**
             * Constructs a new ReqAddFriend.
             * @memberof proto
             * @classdesc Represents a ReqAddFriend.
             * @implements IReqAddFriend
             * @constructor
             * @param {proto.IReqAddFriend=} [properties] Properties to set
             */
            function ReqAddFriend(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReqAddFriend username.
             * @member {string} username
             * @memberof proto.ReqAddFriend
             * @instance
             */
            ReqAddFriend.prototype.username = "";
    
            /**
             * ReqAddFriend friendname.
             * @member {string} friendname
             * @memberof proto.ReqAddFriend
             * @instance
             */
            ReqAddFriend.prototype.friendname = "";
    
            /**
             * Creates a new ReqAddFriend instance using the specified properties.
             * @function create
             * @memberof proto.ReqAddFriend
             * @static
             * @param {proto.IReqAddFriend=} [properties] Properties to set
             * @returns {proto.ReqAddFriend} ReqAddFriend instance
             */
            ReqAddFriend.create = function create(properties) {
                return new ReqAddFriend(properties);
            };
    
            /**
             * Encodes the specified ReqAddFriend message. Does not implicitly {@link proto.ReqAddFriend.verify|verify} messages.
             * @function encode
             * @memberof proto.ReqAddFriend
             * @static
             * @param {proto.IReqAddFriend} message ReqAddFriend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqAddFriend.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.friendname != null && Object.hasOwnProperty.call(message, "friendname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.friendname);
                return writer;
            };
    
            /**
             * Encodes the specified ReqAddFriend message, length delimited. Does not implicitly {@link proto.ReqAddFriend.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ReqAddFriend
             * @static
             * @param {proto.IReqAddFriend} message ReqAddFriend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqAddFriend.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ReqAddFriend message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ReqAddFriend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ReqAddFriend} ReqAddFriend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqAddFriend.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqAddFriend();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.friendname = reader.string();
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
             * Decodes a ReqAddFriend message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ReqAddFriend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ReqAddFriend} ReqAddFriend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqAddFriend.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReqAddFriend message.
             * @function verify
             * @memberof proto.ReqAddFriend
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqAddFriend.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.friendname != null && message.hasOwnProperty("friendname"))
                    if (!$util.isString(message.friendname))
                        return "friendname: string expected";
                return null;
            };
    
            /**
             * Creates a ReqAddFriend message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ReqAddFriend
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ReqAddFriend} ReqAddFriend
             */
            ReqAddFriend.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ReqAddFriend)
                    return object;
                var message = new $root.proto.ReqAddFriend();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.friendname != null)
                    message.friendname = String(object.friendname);
                return message;
            };
    
            /**
             * Creates a plain object from a ReqAddFriend message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ReqAddFriend
             * @static
             * @param {proto.ReqAddFriend} message ReqAddFriend
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqAddFriend.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.friendname = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.friendname != null && message.hasOwnProperty("friendname"))
                    object.friendname = message.friendname;
                return object;
            };
    
            /**
             * Converts this ReqAddFriend to JSON.
             * @function toJSON
             * @memberof proto.ReqAddFriend
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqAddFriend.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ReqAddFriend
             * @function getTypeUrl
             * @memberof proto.ReqAddFriend
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqAddFriend.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReqAddFriend";
            };
    
            return ReqAddFriend;
        })();
    
        proto.Friend = (function() {
    
            /**
             * Properties of a Friend.
             * @memberof proto
             * @interface IFriend
             * @property {string|null} [id] Friend id
             * @property {string|null} [name] Friend name
             */
    
            /**
             * Constructs a new Friend.
             * @memberof proto
             * @classdesc Represents a Friend.
             * @implements IFriend
             * @constructor
             * @param {proto.IFriend=} [properties] Properties to set
             */
            function Friend(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Friend id.
             * @member {string} id
             * @memberof proto.Friend
             * @instance
             */
            Friend.prototype.id = "";
    
            /**
             * Friend name.
             * @member {string} name
             * @memberof proto.Friend
             * @instance
             */
            Friend.prototype.name = "";
    
            /**
             * Creates a new Friend instance using the specified properties.
             * @function create
             * @memberof proto.Friend
             * @static
             * @param {proto.IFriend=} [properties] Properties to set
             * @returns {proto.Friend} Friend instance
             */
            Friend.create = function create(properties) {
                return new Friend(properties);
            };
    
            /**
             * Encodes the specified Friend message. Does not implicitly {@link proto.Friend.verify|verify} messages.
             * @function encode
             * @memberof proto.Friend
             * @static
             * @param {proto.IFriend} message Friend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Friend.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                return writer;
            };
    
            /**
             * Encodes the specified Friend message, length delimited. Does not implicitly {@link proto.Friend.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Friend
             * @static
             * @param {proto.IFriend} message Friend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Friend.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Friend message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Friend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Friend} Friend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Friend.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Friend();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
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
             * Decodes a Friend message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Friend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Friend} Friend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Friend.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Friend message.
             * @function verify
             * @memberof proto.Friend
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Friend.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };
    
            /**
             * Creates a Friend message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Friend
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Friend} Friend
             */
            Friend.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Friend)
                    return object;
                var message = new $root.proto.Friend();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };
    
            /**
             * Creates a plain object from a Friend message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Friend
             * @static
             * @param {proto.Friend} message Friend
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Friend.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };
    
            /**
             * Converts this Friend to JSON.
             * @function toJSON
             * @memberof proto.Friend
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Friend.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Friend
             * @function getTypeUrl
             * @memberof proto.Friend
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Friend.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Friend";
            };
    
            return Friend;
        })();
    
        proto.ResAddFriend = (function() {
    
            /**
             * Properties of a ResAddFriend.
             * @memberof proto
             * @interface IResAddFriend
             * @property {string|null} [username] ResAddFriend username
             * @property {string|null} [friendname] ResAddFriend friendname
             * @property {string|null} [token] ResAddFriend token
             * @property {number|null} [status] ResAddFriend status
             */
    
            /**
             * Constructs a new ResAddFriend.
             * @memberof proto
             * @classdesc Represents a ResAddFriend.
             * @implements IResAddFriend
             * @constructor
             * @param {proto.IResAddFriend=} [properties] Properties to set
             */
            function ResAddFriend(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResAddFriend username.
             * @member {string} username
             * @memberof proto.ResAddFriend
             * @instance
             */
            ResAddFriend.prototype.username = "";
    
            /**
             * ResAddFriend friendname.
             * @member {string} friendname
             * @memberof proto.ResAddFriend
             * @instance
             */
            ResAddFriend.prototype.friendname = "";
    
            /**
             * ResAddFriend token.
             * @member {string} token
             * @memberof proto.ResAddFriend
             * @instance
             */
            ResAddFriend.prototype.token = "";
    
            /**
             * ResAddFriend status.
             * @member {number} status
             * @memberof proto.ResAddFriend
             * @instance
             */
            ResAddFriend.prototype.status = 0;
    
            /**
             * Creates a new ResAddFriend instance using the specified properties.
             * @function create
             * @memberof proto.ResAddFriend
             * @static
             * @param {proto.IResAddFriend=} [properties] Properties to set
             * @returns {proto.ResAddFriend} ResAddFriend instance
             */
            ResAddFriend.create = function create(properties) {
                return new ResAddFriend(properties);
            };
    
            /**
             * Encodes the specified ResAddFriend message. Does not implicitly {@link proto.ResAddFriend.verify|verify} messages.
             * @function encode
             * @memberof proto.ResAddFriend
             * @static
             * @param {proto.IResAddFriend} message ResAddFriend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResAddFriend.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.friendname != null && Object.hasOwnProperty.call(message, "friendname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.friendname);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
                return writer;
            };
    
            /**
             * Encodes the specified ResAddFriend message, length delimited. Does not implicitly {@link proto.ResAddFriend.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ResAddFriend
             * @static
             * @param {proto.IResAddFriend} message ResAddFriend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResAddFriend.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResAddFriend message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ResAddFriend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ResAddFriend} ResAddFriend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResAddFriend.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ResAddFriend();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.friendname = reader.string();
                            break;
                        }
                    case 3: {
                            message.token = reader.string();
                            break;
                        }
                    case 4: {
                            message.status = reader.int32();
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
             * Decodes a ResAddFriend message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ResAddFriend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ResAddFriend} ResAddFriend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResAddFriend.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResAddFriend message.
             * @function verify
             * @memberof proto.ResAddFriend
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResAddFriend.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.friendname != null && message.hasOwnProperty("friendname"))
                    if (!$util.isString(message.friendname))
                        return "friendname: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                return null;
            };
    
            /**
             * Creates a ResAddFriend message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ResAddFriend
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ResAddFriend} ResAddFriend
             */
            ResAddFriend.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ResAddFriend)
                    return object;
                var message = new $root.proto.ResAddFriend();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.friendname != null)
                    message.friendname = String(object.friendname);
                if (object.token != null)
                    message.token = String(object.token);
                if (object.status != null)
                    message.status = object.status | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResAddFriend message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ResAddFriend
             * @static
             * @param {proto.ResAddFriend} message ResAddFriend
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResAddFriend.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.friendname = "";
                    object.token = "";
                    object.status = 0;
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.friendname != null && message.hasOwnProperty("friendname"))
                    object.friendname = message.friendname;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                return object;
            };
    
            /**
             * Converts this ResAddFriend to JSON.
             * @function toJSON
             * @memberof proto.ResAddFriend
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResAddFriend.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ResAddFriend
             * @function getTypeUrl
             * @memberof proto.ResAddFriend
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResAddFriend.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ResAddFriend";
            };
    
            return ResAddFriend;
        })();
    
        proto.ReqLoadMessage = (function() {
    
            /**
             * Properties of a ReqLoadMessage.
             * @memberof proto
             * @interface IReqLoadMessage
             * @property {string|null} [username] ReqLoadMessage username
             * @property {string|null} [friendname] ReqLoadMessage friendname
             */
    
            /**
             * Constructs a new ReqLoadMessage.
             * @memberof proto
             * @classdesc Represents a ReqLoadMessage.
             * @implements IReqLoadMessage
             * @constructor
             * @param {proto.IReqLoadMessage=} [properties] Properties to set
             */
            function ReqLoadMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReqLoadMessage username.
             * @member {string} username
             * @memberof proto.ReqLoadMessage
             * @instance
             */
            ReqLoadMessage.prototype.username = "";
    
            /**
             * ReqLoadMessage friendname.
             * @member {string} friendname
             * @memberof proto.ReqLoadMessage
             * @instance
             */
            ReqLoadMessage.prototype.friendname = "";
    
            /**
             * Creates a new ReqLoadMessage instance using the specified properties.
             * @function create
             * @memberof proto.ReqLoadMessage
             * @static
             * @param {proto.IReqLoadMessage=} [properties] Properties to set
             * @returns {proto.ReqLoadMessage} ReqLoadMessage instance
             */
            ReqLoadMessage.create = function create(properties) {
                return new ReqLoadMessage(properties);
            };
    
            /**
             * Encodes the specified ReqLoadMessage message. Does not implicitly {@link proto.ReqLoadMessage.verify|verify} messages.
             * @function encode
             * @memberof proto.ReqLoadMessage
             * @static
             * @param {proto.IReqLoadMessage} message ReqLoadMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqLoadMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.friendname != null && Object.hasOwnProperty.call(message, "friendname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.friendname);
                return writer;
            };
    
            /**
             * Encodes the specified ReqLoadMessage message, length delimited. Does not implicitly {@link proto.ReqLoadMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ReqLoadMessage
             * @static
             * @param {proto.IReqLoadMessage} message ReqLoadMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqLoadMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ReqLoadMessage message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ReqLoadMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ReqLoadMessage} ReqLoadMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqLoadMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqLoadMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.friendname = reader.string();
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
             * Decodes a ReqLoadMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ReqLoadMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ReqLoadMessage} ReqLoadMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqLoadMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReqLoadMessage message.
             * @function verify
             * @memberof proto.ReqLoadMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqLoadMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.friendname != null && message.hasOwnProperty("friendname"))
                    if (!$util.isString(message.friendname))
                        return "friendname: string expected";
                return null;
            };
    
            /**
             * Creates a ReqLoadMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ReqLoadMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ReqLoadMessage} ReqLoadMessage
             */
            ReqLoadMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ReqLoadMessage)
                    return object;
                var message = new $root.proto.ReqLoadMessage();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.friendname != null)
                    message.friendname = String(object.friendname);
                return message;
            };
    
            /**
             * Creates a plain object from a ReqLoadMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ReqLoadMessage
             * @static
             * @param {proto.ReqLoadMessage} message ReqLoadMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqLoadMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.friendname = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.friendname != null && message.hasOwnProperty("friendname"))
                    object.friendname = message.friendname;
                return object;
            };
    
            /**
             * Converts this ReqLoadMessage to JSON.
             * @function toJSON
             * @memberof proto.ReqLoadMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqLoadMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ReqLoadMessage
             * @function getTypeUrl
             * @memberof proto.ReqLoadMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqLoadMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReqLoadMessage";
            };
    
            return ReqLoadMessage;
        })();
    
        proto.ReqLogout = (function() {
    
            /**
             * Properties of a ReqLogout.
             * @memberof proto
             * @interface IReqLogout
             * @property {string|null} [username] ReqLogout username
             * @property {string|null} [token] ReqLogout token
             */
    
            /**
             * Constructs a new ReqLogout.
             * @memberof proto
             * @classdesc Represents a ReqLogout.
             * @implements IReqLogout
             * @constructor
             * @param {proto.IReqLogout=} [properties] Properties to set
             */
            function ReqLogout(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReqLogout username.
             * @member {string} username
             * @memberof proto.ReqLogout
             * @instance
             */
            ReqLogout.prototype.username = "";
    
            /**
             * ReqLogout token.
             * @member {string} token
             * @memberof proto.ReqLogout
             * @instance
             */
            ReqLogout.prototype.token = "";
    
            /**
             * Creates a new ReqLogout instance using the specified properties.
             * @function create
             * @memberof proto.ReqLogout
             * @static
             * @param {proto.IReqLogout=} [properties] Properties to set
             * @returns {proto.ReqLogout} ReqLogout instance
             */
            ReqLogout.create = function create(properties) {
                return new ReqLogout(properties);
            };
    
            /**
             * Encodes the specified ReqLogout message. Does not implicitly {@link proto.ReqLogout.verify|verify} messages.
             * @function encode
             * @memberof proto.ReqLogout
             * @static
             * @param {proto.IReqLogout} message ReqLogout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqLogout.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                return writer;
            };
    
            /**
             * Encodes the specified ReqLogout message, length delimited. Does not implicitly {@link proto.ReqLogout.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ReqLogout
             * @static
             * @param {proto.IReqLogout} message ReqLogout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqLogout.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ReqLogout message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ReqLogout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ReqLogout} ReqLogout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqLogout.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqLogout();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.token = reader.string();
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
             * Decodes a ReqLogout message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ReqLogout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ReqLogout} ReqLogout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqLogout.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReqLogout message.
             * @function verify
             * @memberof proto.ReqLogout
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqLogout.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };
    
            /**
             * Creates a ReqLogout message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ReqLogout
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ReqLogout} ReqLogout
             */
            ReqLogout.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ReqLogout)
                    return object;
                var message = new $root.proto.ReqLogout();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };
    
            /**
             * Creates a plain object from a ReqLogout message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ReqLogout
             * @static
             * @param {proto.ReqLogout} message ReqLogout
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqLogout.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.token = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };
    
            /**
             * Converts this ReqLogout to JSON.
             * @function toJSON
             * @memberof proto.ReqLogout
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqLogout.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ReqLogout
             * @function getTypeUrl
             * @memberof proto.ReqLogout
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqLogout.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReqLogout";
            };
    
            return ReqLogout;
        })();
    
        return proto;
    })();

    return $root;
})(protobuf).proto;

