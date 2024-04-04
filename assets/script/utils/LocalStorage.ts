import { _decorator, Component, Node } from 'cc';
const { ccclass } = _decorator;

@ccclass('LocalStorage')
export class LocalStorage extends Component {
   public static instance: LocalStorage = null;
   public static me(): LocalStorage {
    if (this.instance == null) {
        this.instance = new LocalStorage();
      }
      return this.instance;
   }
    public setItem(key: any, value: any) {
        localStorage.setItem(key, value);
    }
    public getItem(key: any) {
        return localStorage.getItem(key);
    }
    public removeItem(key: any) {
        localStorage.removeItem(key);
    }
}


