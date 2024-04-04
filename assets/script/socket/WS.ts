import { wsConfig } from "../config/Config";
import { SceneManage } from "../manage/SceneManage";
export class WS {
    private static _instance: WS;
    public _ws: WebSocket;
    private _url: string = wsConfig.host + ":" + wsConfig.port + wsConfig.path;
    private connectFailLastTime: number = 0;
    private static listPacket: proto.Packet[] = [];

    constructor() {
        this.checkAndReconnect();
        console.debug("WS created");
    }

    public static me(): WS {
        if (WS._instance == null) {
            WS._instance = new WS();
        }
        return WS._instance;
    }

    public static send(msg: proto.Packet): void {
        // if (WS._instance._ws.readyState != WebSocket.OPEN) {
        //     return
        // }
        // this._ws.send(proto.Message.encode(msg).finish());
        console.debug("WS.send:::", msg)
        this.listPacket.push(msg);
    }

    public sendWithBuffer() {
        // cứ 0,1s đóng gói và gửi đi
        if (WS._instance._ws.readyState != WebSocket.OPEN || WS.listPacket.length <= 0) {
            return
        }
        let packets = new proto.PacketWrapper();
        packets.packet = WS.listPacket;
        let buffer = proto.PacketWrapper.encode(packets).finish();
        this._ws.send(buffer);
        WS.listPacket = [];
    }

    connect(): void {
        this._ws = new WebSocket(this._url);
        this._ws.binaryType = "arraybuffer";
        this._ws.onopen = this.onOpen;
        this._ws.onclose = this.onClose;
        this._ws.onerror = this.onError;
        this._ws.onmessage = this.onMessage;
    }

    onMessage = (event: any) => {
        console.log('Có WS message: ' + event.data);
        let data = new Uint8Array(event.data);
        let msg = proto.PacketWrapper.decode(data);
        SceneManage.me()?.onMessageHandler(msg);
    }

    onOpen = (event: any) => {
        console.debug('WS connected');
    }


    onClose = (event: any) => {
        SceneManage.me()?.onClosed();
    }

    onError = (event: any) => {
        SceneManage.me()?.onError();
        console.debug('WS error: ' + event.message);
        console.debug('WS error: ' + JSON.stringify(event));
        JSON.stringify(event, ["message", "arguments", "type", "name"])
    }

    public checkAndReconnect() {
        let now = new Date().getTime()
        if (WS._instance && (WS._instance._ws.readyState == WebSocket.OPEN || now - this.connectFailLastTime < 30000)) {
            return;
        }
        this.connectFailLastTime = now;
        this.connect();
    }
}