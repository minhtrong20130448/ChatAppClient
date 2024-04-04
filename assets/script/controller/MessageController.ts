import { _decorator, Button, Component, director, EditBox, EventKeyboard, Input, input, instantiate, KeyCode, Label, Node, Prefab, ScrollView, SystemEvent } from 'cc';
import { WS } from '../socket/WS';
import GlobalData from '../handle/GlobalData';
import AbsScene from '../manage/AbsScene';
import { SceneManage } from '../manage/SceneManage';
import { LocalStorage } from '../utils/LocalStorage';
const { ccclass, property } = _decorator;

@ccclass('MessageController')
export class MessageController extends AbsScene {
    @property(EditBox)
    public editBox: EditBox = null!;
    @property(Prefab)
    public messagePrefab: Prefab = null!;
    @property(Prefab)
    public friendPrefab: Prefab = null!;
    @property(ScrollView)
    public scrollView: ScrollView = null!;
    @property(Label)
    public usernameLabel: Label = null!;
    @property(ScrollView)
    public friendScrollView: ScrollView = null!;
    @property(Node)
    public friendModal: Node = null!;
    @property(Prefab)
    public messageUserPrefab: Prefab = null!;
    @property(Label)
    public nameFriend: Label = null!;
    @property(Prefab)
    public messageFriendPrefab: Prefab = null!;

    protected onLoad(): void {
        console.log('MessageController loaded');
        //input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        this.scrollView.node.on('scroll-to-top', this.callback, this);
        // Gắn sự kiện cho sự kiện keyPressed của EditBox
        this.editBox.node.on('editing-return', this.onEditBoxEnter, this);
        // Gắn sự kiện cho sự kiện focus của EditBox
        this.editBox.node.on('editing-did-began', this.onEditBoxFocus, this);
        this.editBox.node.on('editing-did-ended', this.onEditBoxBlur, this);
    }
    
    start() {
        SceneManage.me().currentScene = this;
        let user = GlobalData.me().getUser();
        this.usernameLabel.string = user?.username;
        //Load friends
        this.loadFriends();

    }

    onMessageHandler(packetWrapper: proto.IPacketWrapper) : void {
        //super.onMessageHandler(packets);
        packetWrapper.packet.forEach((packet) => {
            if (packet.resMessage) {
                let mess = packet.resMessage;
                //Hiển thị message lên giao diện
                if(mess.userFrom === GlobalData.me()?.getUser()?.username) {
                    let message: Node | null = instantiate(this.messageUserPrefab);
                    message.getChildByName('MessageContent').getChildByName('MessageLabel').getComponent(Label).string = mess.content;
                    this.scrollView.content.addChild(message);
                }else{
                    let message: Node | null = instantiate(this.messageFriendPrefab);
                    message.getChildByName('MessageContent').getChildByName('MessageLabel').getComponent(Label).string = mess.content;
                    this.scrollView.content.addChild(message);
                }
            }
            if(packet.friendlist) {
                console.log('WS message: length' + packet.friendlist.friends.length + ' - ' + packet.friendlist.friends);
                packet.friendlist.friends.forEach((friend) => {
                    console.log('Friend: ' + friend);
                    let friendPrefab: Node | null = instantiate(this.friendPrefab);
                    friendPrefab.on
                    friendPrefab.getChildByName('Label').getComponent(Label).string = friend.name;
                    this.friendScrollView.content.addChild(friendPrefab);
                });
            }
            if(packet.resAddFriend) {
                if(packet.resAddFriend.status === 200) {
                    let friendPrefab: Node | null = instantiate(this.friendPrefab);
                    friendPrefab.getChildByName('Label').getComponent(Label).string = packet.resAddFriend.friendname;
                    this.friendScrollView.content.addChild(friendPrefab);
                    this.closeModal();
                } else {
                    this.friendModal.getChildByName('Notify').getComponent(Label).string = 'User không tồn tại!';
                }
            }
            if(packet.messageList){
                this.nameFriend.string = LocalStorage.me().getItem('UserMassageFocus');
                this.scrollView.content.removeAllChildren();
                packet.messageList.messages.forEach((mess) => {
                    if(mess.userFrom === GlobalData.me()?.getUser()?.username) {
                        let message: Node | null = instantiate(this.messageUserPrefab);
                        message.getChildByName('MessageContent').getChildByName('MessageLabel').getComponent(Label).string = mess.content;
                        this.scrollView.content.addChild(message);
                    }else{
                        let message: Node | null = instantiate(this.messageFriendPrefab);
                        message.getChildByName('MessageContent').getChildByName('MessageLabel').getComponent(Label).string = mess.content;
                        this.scrollView.content.addChild(message);
                    }
                });
            }
        });
    }

    closeModal() {
        this.friendModal.active = false;
    }

    sendMessage() {
        console.log(SceneManage.me().getCurrentScene())
        console.log(WS.me()._ws.readyState == WebSocket.OPEN, WS.me()._ws.onmessage);
        //Gửi message qua server
        let messageContent = new proto.Message();
        messageContent.userFrom = ""+GlobalData.me()?.getUser()?.username;
        messageContent.userTo = LocalStorage.me().getItem('UserMassageFocus');
        messageContent.content = this.editBox.string;
        let Packet = new proto.Packet();
        Packet.reqMessage = messageContent;
        this.editBox.string = '';
        WS.send(Packet);
    }
   
    logout() {
        let Packet = new proto.Packet();
        Packet.reqLogout = new proto.ReqLogout();
        Packet.reqLogout.username = this.usernameLabel.string;
        WS.send(Packet);
        director.loadScene('login');
    }

    loadFriends() {
        let Packet = new proto.Packet();
        Packet.reqLoadFriends = this.usernameLabel.string;
        WS.send(Packet);
    }

    onEditBoxEnter () {
        this.sendMessage();
    }

    onEditBoxFocus() {
        // Bắt đầu theo dõi sự kiện phím Enter khi EditBox được focus
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onEditBoxBlur() {
        // Dừng theo dõi sự kiện phím Enter khi EditBox mất tập trung
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    callback(scrollView: ScrollView) {
        
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ENTER: // enter
                this.sendMessage()
                break;
        }
    }

    update(deltaTime: number) {

    }
}


