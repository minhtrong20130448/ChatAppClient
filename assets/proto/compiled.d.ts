declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace proto. */
export namespace proto {

    /** Properties of a PacketWrapper. */
    interface IPacketWrapper {

        /** PacketWrapper packet */
        packet?: (proto.IPacket[]|null);
    }

    /** Represents a PacketWrapper. */
    class PacketWrapper implements IPacketWrapper {

        /**
         * Constructs a new PacketWrapper.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPacketWrapper);

        /** PacketWrapper packet. */
        public packet: proto.IPacket[];

        /**
         * Creates a new PacketWrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketWrapper instance
         */
        public static create(properties?: proto.IPacketWrapper): proto.PacketWrapper;

        /**
         * Encodes the specified PacketWrapper message. Does not implicitly {@link proto.PacketWrapper.verify|verify} messages.
         * @param message PacketWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPacketWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketWrapper message, length delimited. Does not implicitly {@link proto.PacketWrapper.verify|verify} messages.
         * @param message PacketWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPacketWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketWrapper message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PacketWrapper;

        /**
         * Decodes a PacketWrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PacketWrapper;

        /**
         * Verifies a PacketWrapper message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketWrapper message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketWrapper
         */
        public static fromObject(object: { [k: string]: any }): proto.PacketWrapper;

        /**
         * Creates a plain object from a PacketWrapper message. Also converts values to other types if specified.
         * @param message PacketWrapper
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PacketWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketWrapper to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketWrapper
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FriendList. */
    interface IFriendList {

        /** FriendList friends */
        friends?: (proto.IFriend[]|null);
    }

    /** Represents a FriendList. */
    class FriendList implements IFriendList {

        /**
         * Constructs a new FriendList.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFriendList);

        /** FriendList friends. */
        public friends: proto.IFriend[];

        /**
         * Creates a new FriendList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendList instance
         */
        public static create(properties?: proto.IFriendList): proto.FriendList;

        /**
         * Encodes the specified FriendList message. Does not implicitly {@link proto.FriendList.verify|verify} messages.
         * @param message FriendList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFriendList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendList message, length delimited. Does not implicitly {@link proto.FriendList.verify|verify} messages.
         * @param message FriendList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFriendList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FriendList;

        /**
         * Decodes a FriendList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FriendList;

        /**
         * Verifies a FriendList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendList
         */
        public static fromObject(object: { [k: string]: any }): proto.FriendList;

        /**
         * Creates a plain object from a FriendList message. Also converts values to other types if specified.
         * @param message FriendList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.FriendList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageList. */
    interface IMessageList {

        /** MessageList messages */
        messages?: (proto.IMessage[]|null);
    }

    /** Represents a MessageList. */
    class MessageList implements IMessageList {

        /**
         * Constructs a new MessageList.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMessageList);

        /** MessageList messages. */
        public messages: proto.IMessage[];

        /**
         * Creates a new MessageList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageList instance
         */
        public static create(properties?: proto.IMessageList): proto.MessageList;

        /**
         * Encodes the specified MessageList message. Does not implicitly {@link proto.MessageList.verify|verify} messages.
         * @param message MessageList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMessageList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageList message, length delimited. Does not implicitly {@link proto.MessageList.verify|verify} messages.
         * @param message MessageList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMessageList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MessageList;

        /**
         * Decodes a MessageList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MessageList;

        /**
         * Verifies a MessageList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageList
         */
        public static fromObject(object: { [k: string]: any }): proto.MessageList;

        /**
         * Creates a plain object from a MessageList message. Also converts values to other types if specified.
         * @param message MessageList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.MessageList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Packet. */
    interface IPacket {

        /** Packet reqLogin */
        reqLogin?: (proto.IReqLogin|null);

        /** Packet resLogin */
        resLogin?: (proto.IResLogin|null);

        /** Packet reqMessage */
        reqMessage?: (proto.IMessage|null);

        /** Packet resMessage */
        resMessage?: (proto.IMessage|null);

        /** Packet reqAddFriend */
        reqAddFriend?: (proto.IReqAddFriend|null);

        /** Packet resAddFriend */
        resAddFriend?: (proto.IResAddFriend|null);

        /** Packet reqSignin */
        reqSignin?: (proto.IReqSignin|null);

        /** Packet resSignin */
        resSignin?: (proto.IResSignin|null);

        /** Packet reqLogout */
        reqLogout?: (proto.IReqLogout|null);

        /** Packet reqLoadFriends */
        reqLoadFriends?: (string|null);

        /** Packet friendlist */
        friendlist?: (proto.IFriendList|null);

        /** Packet reqLoadMessage */
        reqLoadMessage?: (proto.IReqLoadMessage|null);

        /** Packet messageList */
        messageList?: (proto.IMessageList|null);
    }

    /** Represents a Packet. */
    class Packet implements IPacket {

        /**
         * Constructs a new Packet.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPacket);

        /** Packet reqLogin. */
        public reqLogin?: (proto.IReqLogin|null);

        /** Packet resLogin. */
        public resLogin?: (proto.IResLogin|null);

        /** Packet reqMessage. */
        public reqMessage?: (proto.IMessage|null);

        /** Packet resMessage. */
        public resMessage?: (proto.IMessage|null);

        /** Packet reqAddFriend. */
        public reqAddFriend?: (proto.IReqAddFriend|null);

        /** Packet resAddFriend. */
        public resAddFriend?: (proto.IResAddFriend|null);

        /** Packet reqSignin. */
        public reqSignin?: (proto.IReqSignin|null);

        /** Packet resSignin. */
        public resSignin?: (proto.IResSignin|null);

        /** Packet reqLogout. */
        public reqLogout?: (proto.IReqLogout|null);

        /** Packet reqLoadFriends. */
        public reqLoadFriends?: (string|null);

        /** Packet friendlist. */
        public friendlist?: (proto.IFriendList|null);

        /** Packet reqLoadMessage. */
        public reqLoadMessage?: (proto.IReqLoadMessage|null);

        /** Packet messageList. */
        public messageList?: (proto.IMessageList|null);

        /** Packet data. */
        public data?: ("reqLogin"|"resLogin"|"reqMessage"|"resMessage"|"reqAddFriend"|"resAddFriend"|"reqSignin"|"resSignin"|"reqLogout"|"reqLoadFriends"|"friendlist"|"reqLoadMessage"|"messageList");

        /**
         * Creates a new Packet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Packet instance
         */
        public static create(properties?: proto.IPacket): proto.Packet;

        /**
         * Encodes the specified Packet message. Does not implicitly {@link proto.Packet.verify|verify} messages.
         * @param message Packet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Packet message, length delimited. Does not implicitly {@link proto.Packet.verify|verify} messages.
         * @param message Packet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Packet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Packet;

        /**
         * Decodes a Packet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Packet;

        /**
         * Verifies a Packet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Packet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Packet
         */
        public static fromObject(object: { [k: string]: any }): proto.Packet;

        /**
         * Creates a plain object from a Packet message. Also converts values to other types if specified.
         * @param message Packet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Packet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Packet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Packet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a User. */
    interface IUser {

        /** User userId */
        userId?: (number|null);

        /** User username */
        username?: (string|null);

        /** User playerName */
        playerName?: (string|null);

        /** User gender */
        gender?: (number|null);

        /** User sponsor */
        sponsor?: (number|null);

        /** User email */
        email?: (string|null);

        /** User phone */
        phone?: (string|null);

        /** User gold */
        gold?: (number|Long|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUser);

        /** User userId. */
        public userId: number;

        /** User username. */
        public username: string;

        /** User playerName. */
        public playerName: string;

        /** User gender. */
        public gender: number;

        /** User sponsor. */
        public sponsor: number;

        /** User email. */
        public email: string;

        /** User phone. */
        public phone: string;

        /** User gold. */
        public gold: (number|Long);

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: proto.IUser): proto.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link proto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link proto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): proto.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message userFrom */
        userFrom?: (string|null);

        /** Message userTo */
        userTo?: (string|null);

        /** Message content */
        content?: (string|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMessage);

        /** Message userFrom. */
        public userFrom: string;

        /** Message userTo. */
        public userTo: string;

        /** Message content. */
        public content: string;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: proto.IMessage): proto.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link proto.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link proto.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): proto.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqLogin. */
    interface IReqLogin {

        /** ReqLogin username */
        username?: (string|null);

        /** ReqLogin password */
        password?: (string|null);
    }

    /** Represents a ReqLogin. */
    class ReqLogin implements IReqLogin {

        /**
         * Constructs a new ReqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqLogin);

        /** ReqLogin username. */
        public username: string;

        /** ReqLogin password. */
        public password: string;

        /**
         * Creates a new ReqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLogin instance
         */
        public static create(properties?: proto.IReqLogin): proto.ReqLogin;

        /**
         * Encodes the specified ReqLogin message. Does not implicitly {@link proto.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link proto.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ReqLogin;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ReqLogin;

        /**
         * Verifies a ReqLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqLogin
         */
        public static fromObject(object: { [k: string]: any }): proto.ReqLogin;

        /**
         * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
         * @param message ReqLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ReqLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResLogin. */
    interface IResLogin {

        /** ResLogin status */
        status?: (number|null);

        /** ResLogin token */
        token?: (string|null);

        /** ResLogin username */
        username?: (string|null);
    }

    /** Represents a ResLogin. */
    class ResLogin implements IResLogin {

        /**
         * Constructs a new ResLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IResLogin);

        /** ResLogin status. */
        public status: number;

        /** ResLogin token. */
        public token: string;

        /** ResLogin username. */
        public username: string;

        /**
         * Creates a new ResLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResLogin instance
         */
        public static create(properties?: proto.IResLogin): proto.ResLogin;

        /**
         * Encodes the specified ResLogin message. Does not implicitly {@link proto.ResLogin.verify|verify} messages.
         * @param message ResLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IResLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResLogin message, length delimited. Does not implicitly {@link proto.ResLogin.verify|verify} messages.
         * @param message ResLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IResLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ResLogin;

        /**
         * Decodes a ResLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ResLogin;

        /**
         * Verifies a ResLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResLogin
         */
        public static fromObject(object: { [k: string]: any }): proto.ResLogin;

        /**
         * Creates a plain object from a ResLogin message. Also converts values to other types if specified.
         * @param message ResLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ResLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqSignin. */
    interface IReqSignin {

        /** ReqSignin username */
        username?: (string|null);

        /** ReqSignin password */
        password?: (string|null);
    }

    /** Represents a ReqSignin. */
    class ReqSignin implements IReqSignin {

        /**
         * Constructs a new ReqSignin.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqSignin);

        /** ReqSignin username. */
        public username: string;

        /** ReqSignin password. */
        public password: string;

        /**
         * Creates a new ReqSignin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSignin instance
         */
        public static create(properties?: proto.IReqSignin): proto.ReqSignin;

        /**
         * Encodes the specified ReqSignin message. Does not implicitly {@link proto.ReqSignin.verify|verify} messages.
         * @param message ReqSignin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqSignin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqSignin message, length delimited. Does not implicitly {@link proto.ReqSignin.verify|verify} messages.
         * @param message ReqSignin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqSignin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqSignin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSignin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ReqSignin;

        /**
         * Decodes a ReqSignin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSignin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ReqSignin;

        /**
         * Verifies a ReqSignin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqSignin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqSignin
         */
        public static fromObject(object: { [k: string]: any }): proto.ReqSignin;

        /**
         * Creates a plain object from a ReqSignin message. Also converts values to other types if specified.
         * @param message ReqSignin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ReqSignin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqSignin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqSignin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResSignin. */
    interface IResSignin {

        /** ResSignin status */
        status?: (number|null);

        /** ResSignin token */
        token?: (string|null);
    }

    /** Represents a ResSignin. */
    class ResSignin implements IResSignin {

        /**
         * Constructs a new ResSignin.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IResSignin);

        /** ResSignin status. */
        public status: number;

        /** ResSignin token. */
        public token: string;

        /**
         * Creates a new ResSignin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResSignin instance
         */
        public static create(properties?: proto.IResSignin): proto.ResSignin;

        /**
         * Encodes the specified ResSignin message. Does not implicitly {@link proto.ResSignin.verify|verify} messages.
         * @param message ResSignin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IResSignin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResSignin message, length delimited. Does not implicitly {@link proto.ResSignin.verify|verify} messages.
         * @param message ResSignin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IResSignin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResSignin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResSignin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ResSignin;

        /**
         * Decodes a ResSignin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResSignin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ResSignin;

        /**
         * Verifies a ResSignin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResSignin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResSignin
         */
        public static fromObject(object: { [k: string]: any }): proto.ResSignin;

        /**
         * Creates a plain object from a ResSignin message. Also converts values to other types if specified.
         * @param message ResSignin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ResSignin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResSignin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResSignin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqAddFriend. */
    interface IReqAddFriend {

        /** ReqAddFriend username */
        username?: (string|null);

        /** ReqAddFriend friendname */
        friendname?: (string|null);
    }

    /** Represents a ReqAddFriend. */
    class ReqAddFriend implements IReqAddFriend {

        /**
         * Constructs a new ReqAddFriend.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqAddFriend);

        /** ReqAddFriend username. */
        public username: string;

        /** ReqAddFriend friendname. */
        public friendname: string;

        /**
         * Creates a new ReqAddFriend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAddFriend instance
         */
        public static create(properties?: proto.IReqAddFriend): proto.ReqAddFriend;

        /**
         * Encodes the specified ReqAddFriend message. Does not implicitly {@link proto.ReqAddFriend.verify|verify} messages.
         * @param message ReqAddFriend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqAddFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqAddFriend message, length delimited. Does not implicitly {@link proto.ReqAddFriend.verify|verify} messages.
         * @param message ReqAddFriend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqAddFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqAddFriend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAddFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ReqAddFriend;

        /**
         * Decodes a ReqAddFriend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAddFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ReqAddFriend;

        /**
         * Verifies a ReqAddFriend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqAddFriend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqAddFriend
         */
        public static fromObject(object: { [k: string]: any }): proto.ReqAddFriend;

        /**
         * Creates a plain object from a ReqAddFriend message. Also converts values to other types if specified.
         * @param message ReqAddFriend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ReqAddFriend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqAddFriend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqAddFriend
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Friend. */
    interface IFriend {

        /** Friend id */
        id?: (string|null);

        /** Friend name */
        name?: (string|null);
    }

    /** Represents a Friend. */
    class Friend implements IFriend {

        /**
         * Constructs a new Friend.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFriend);

        /** Friend id. */
        public id: string;

        /** Friend name. */
        public name: string;

        /**
         * Creates a new Friend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Friend instance
         */
        public static create(properties?: proto.IFriend): proto.Friend;

        /**
         * Encodes the specified Friend message. Does not implicitly {@link proto.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Friend message, length delimited. Does not implicitly {@link proto.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Friend;

        /**
         * Decodes a Friend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Friend;

        /**
         * Verifies a Friend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Friend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Friend
         */
        public static fromObject(object: { [k: string]: any }): proto.Friend;

        /**
         * Creates a plain object from a Friend message. Also converts values to other types if specified.
         * @param message Friend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Friend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Friend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Friend
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResAddFriend. */
    interface IResAddFriend {

        /** ResAddFriend username */
        username?: (string|null);

        /** ResAddFriend friendname */
        friendname?: (string|null);

        /** ResAddFriend token */
        token?: (string|null);

        /** ResAddFriend status */
        status?: (number|null);
    }

    /** Represents a ResAddFriend. */
    class ResAddFriend implements IResAddFriend {

        /**
         * Constructs a new ResAddFriend.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IResAddFriend);

        /** ResAddFriend username. */
        public username: string;

        /** ResAddFriend friendname. */
        public friendname: string;

        /** ResAddFriend token. */
        public token: string;

        /** ResAddFriend status. */
        public status: number;

        /**
         * Creates a new ResAddFriend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResAddFriend instance
         */
        public static create(properties?: proto.IResAddFriend): proto.ResAddFriend;

        /**
         * Encodes the specified ResAddFriend message. Does not implicitly {@link proto.ResAddFriend.verify|verify} messages.
         * @param message ResAddFriend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IResAddFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResAddFriend message, length delimited. Does not implicitly {@link proto.ResAddFriend.verify|verify} messages.
         * @param message ResAddFriend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IResAddFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResAddFriend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResAddFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ResAddFriend;

        /**
         * Decodes a ResAddFriend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResAddFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ResAddFriend;

        /**
         * Verifies a ResAddFriend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResAddFriend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResAddFriend
         */
        public static fromObject(object: { [k: string]: any }): proto.ResAddFriend;

        /**
         * Creates a plain object from a ResAddFriend message. Also converts values to other types if specified.
         * @param message ResAddFriend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ResAddFriend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResAddFriend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResAddFriend
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqLoadMessage. */
    interface IReqLoadMessage {

        /** ReqLoadMessage username */
        username?: (string|null);

        /** ReqLoadMessage friendname */
        friendname?: (string|null);
    }

    /** Represents a ReqLoadMessage. */
    class ReqLoadMessage implements IReqLoadMessage {

        /**
         * Constructs a new ReqLoadMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqLoadMessage);

        /** ReqLoadMessage username. */
        public username: string;

        /** ReqLoadMessage friendname. */
        public friendname: string;

        /**
         * Creates a new ReqLoadMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLoadMessage instance
         */
        public static create(properties?: proto.IReqLoadMessage): proto.ReqLoadMessage;

        /**
         * Encodes the specified ReqLoadMessage message. Does not implicitly {@link proto.ReqLoadMessage.verify|verify} messages.
         * @param message ReqLoadMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqLoadMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqLoadMessage message, length delimited. Does not implicitly {@link proto.ReqLoadMessage.verify|verify} messages.
         * @param message ReqLoadMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqLoadMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqLoadMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLoadMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ReqLoadMessage;

        /**
         * Decodes a ReqLoadMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLoadMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ReqLoadMessage;

        /**
         * Verifies a ReqLoadMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqLoadMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqLoadMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ReqLoadMessage;

        /**
         * Creates a plain object from a ReqLoadMessage message. Also converts values to other types if specified.
         * @param message ReqLoadMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ReqLoadMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqLoadMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqLoadMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqLogout. */
    interface IReqLogout {

        /** ReqLogout username */
        username?: (string|null);

        /** ReqLogout token */
        token?: (string|null);
    }

    /** Represents a ReqLogout. */
    class ReqLogout implements IReqLogout {

        /**
         * Constructs a new ReqLogout.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqLogout);

        /** ReqLogout username. */
        public username: string;

        /** ReqLogout token. */
        public token: string;

        /**
         * Creates a new ReqLogout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLogout instance
         */
        public static create(properties?: proto.IReqLogout): proto.ReqLogout;

        /**
         * Encodes the specified ReqLogout message. Does not implicitly {@link proto.ReqLogout.verify|verify} messages.
         * @param message ReqLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqLogout message, length delimited. Does not implicitly {@link proto.ReqLogout.verify|verify} messages.
         * @param message ReqLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqLogout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ReqLogout;

        /**
         * Decodes a ReqLogout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ReqLogout;

        /**
         * Verifies a ReqLogout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqLogout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqLogout
         */
        public static fromObject(object: { [k: string]: any }): proto.ReqLogout;

        /**
         * Creates a plain object from a ReqLogout message. Also converts values to other types if specified.
         * @param message ReqLogout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ReqLogout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqLogout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqLogout
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
 
} 
 export {}