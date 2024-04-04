import { _decorator, Button, Component, director, EditBox, Node } from 'cc';
import { WS } from '../socket/WS';
const { ccclass, property } = _decorator;

@ccclass('SignupController')
export class SignupController extends Component {
    @property(EditBox)
    public username: EditBox = null!;
    @property(EditBox)
    public password: EditBox = null!;
    @property(Button)
    public signinButton: Button = null!;
    protected onLoad(): void {
        // WS.me()._ws.onmessage = (event: any) => {
        //     let data = new Uint8Array(event.data);
        //     let packetWrapper = proto.PacketWrapper.decode(data);
        //     console.log('PacketWrapper: ' + packetWrapper.packet.length + ", " + packetWrapper);
        //     packetWrapper.packet.forEach((packet) => {
        //         let resSignin = packet.resSignin;
        //         if(resSignin.status === 400){
        //             console.log('Đăng ký thất bại vì username đã tồn tại!');
        //         }else if(resSignin.status === 200) {
        //             console.log('Đăng ký thành công!');
        //             director.loadScene('login');
        //         }
        //     });
        // }
    }

    signup() {
        let ReqSignin = new proto.ReqSignin();
        ReqSignin.username = this.username.string;
        ReqSignin.password = this.password.string;
        let packet = new proto.Packet();
        packet.reqSignin = ReqSignin;
        WS.send(packet);
    }


    start() {

    }

    update(deltaTime: number) {
        
    }
}


