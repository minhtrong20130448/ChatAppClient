import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;
import { LocalStorage } from '../utils/LocalStorage';
import GlobalData from '../handle/GlobalData';
import { WS } from '../socket/WS';
@ccclass('PopupFocusMessage')
export class PopupFocusMessage extends Component {
    start() {

    }

    loadUserMassage() {
        console.log('load user message');
        let nameUserFocus = this.node.getChildByName('Label').getComponent(Label).string;
        console.log("LocalStorage save: "+nameUserFocus);
        LocalStorage.me().setItem('UserMassageFocus', nameUserFocus);
        let Packet = new proto.Packet();
        let reqLoadMessage = new proto.ReqLoadMessage();
        reqLoadMessage.username = GlobalData.me().getUser()?.username;
        reqLoadMessage.friendname = nameUserFocus;
        Packet.reqLoadMessage = reqLoadMessage;
        WS.send(Packet);
    }
}


