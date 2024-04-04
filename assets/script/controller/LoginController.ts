import { _decorator, Button, Component, director, EditBox, Node } from 'cc';
import { WS } from '../socket/WS';
import GlobalData from '../handle/GlobalData';
import {POPUP_MESSAGE} from '../utils/Const';
import AbsScene from '../manage/AbsScene';
import { SceneManage } from '../manage/SceneManage';
const { ccclass, property } = _decorator;

@ccclass('LoginController')
export class LoginController extends AbsScene {
    @property(EditBox)
    public username: EditBox = null!;
    @property(EditBox)
    public password: EditBox = null!;
    @property(Button)
    public loginButton: Button = null!;

    start() {
        SceneManage.me().currentScene = this;
    }

    onMessageHandler(packetWrapper: proto.IPacketWrapper) : void {
        packetWrapper.packet.forEach((packet) => {
            let resLogin = packet.resLogin;
            if (resLogin) {
                if(resLogin.status === 400){
                    console.log(POPUP_MESSAGE.LOGIN_FAILED_400);
                }else if(resLogin.status === 402){
                    console.log(POPUP_MESSAGE.LOGIN_FAILED_402);
                }else if(resLogin.status === 500){
                    console.log(POPUP_MESSAGE.LOGIN_FAILED_500);
                }else if(resLogin.status === 200) {
                    console.log(POPUP_MESSAGE.LOGIN_SUCCESS_200);
                    let user = new proto.User();
                    user.username = resLogin.username;
                    GlobalData.me().setUser(user);
                    director.loadScene('chat');
                }
            }
        });
    }

    login() {
        let reqLogin = new proto.ReqLogin();
        reqLogin.username = this.username.string;
        reqLogin.password = this.password.string;
        let packet = new proto.Packet();
        packet.reqLogin = reqLogin;
        WS.send(packet);
    }

    update(deltaTime: number) {
        
    }
}


