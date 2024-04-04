import { find } from "cc";
import AbsScene from "./AbsScene";

export class SceneManage {
    private static _instance: SceneManage = new SceneManage();
    public currScene: AbsScene;
    public static me(): SceneManage {
        return this._instance;
    }
    constructor() {
    }
    get currentScene(): AbsScene {
        return this.currScene;
    }
    set currentScene(scene: AbsScene) {
        this.currScene = scene;
    }

    onMessageHandler(packets: proto.IPacketWrapper) {
        //Nếu có message thì gửi tới các component của scene
        this.getSceneComponents()
            .forEach((component: any) => console.log(component, component.onMessageHandler)); 
            
        this.getSceneComponents()
            .forEach((component: any) => component.onMessageHandler ? component.onMessageHandler(packets) : null);  
    }

    onError() {

    }
    onClosed() {
        this.getSceneComponents()
            .forEach((c: any) => c.onClosed ? c.onClosed() : null);
    }
    getCurrentScene(): AbsScene {
        return this.currScene;
    }
    private getSceneComponents() {
        let node = find("Canvas");
        //Lấy ra toàn bộ component của các node con của Canvas
        return node ? node.getComponentsInChildren(AbsScene) : [];}
}