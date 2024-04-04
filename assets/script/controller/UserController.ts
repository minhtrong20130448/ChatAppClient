import { _decorator, Component, EditBox, instantiate, Label, Node, Prefab, ScrollView } from 'cc';
import { ModalController } from './ModalController';
import { WS } from '../socket/WS';
const { ccclass, property } = _decorator;

@ccclass('UserControll')
export class UserControll extends Component {
    @property(Node)
    public friendModal: Node = null!;
    @property(EditBox)
    public nameFriendEditBox: EditBox = null!;
    @property(Label)
    public usernameLabel: Label = null!;
    @property(ScrollView)
    public friendScrollView: ScrollView = null!;
  
    start() {
        this.friendModal.active = false;
    }

    protected onLoad(): void {

    }

    openModal() {
        if(this.friendModal != null) {
            this.friendModal.active = true
        }
    }
  
    addFriend() {
        console.log('add friend click');
        console.log(this.nameFriendEditBox.string);
        let Packet = new proto.Packet();
        let reqAddFriend = new proto.ReqAddFriend();
        reqAddFriend.username = this.usernameLabel.string;
        reqAddFriend.friendname = this.nameFriendEditBox.string;
        Packet.reqAddFriend = reqAddFriend;
        WS.send(Packet);
        //this.closeModal();
    }

    closeModal() {
        this.friendModal.active = false;
    }

    update(deltaTime: number) {
        
    }
}


