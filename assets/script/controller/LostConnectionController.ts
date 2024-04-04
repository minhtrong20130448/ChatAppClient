import { _decorator, Component, Node } from 'cc';
import { WS } from '../socket/WS';
const { ccclass, property } = _decorator;

@ccclass('LostConnectionController')
export class LostConnectionController extends Component {
    start() {

    }

    update(deltaTime: number) {
        WS.me().sendWithBuffer();
        WS.me().checkAndReconnect();
    }
}


