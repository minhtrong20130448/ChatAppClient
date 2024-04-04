export default class GlobalData {
    private static instance: GlobalData = null;
    public static me() {
      if (this.instance == null) {
        this.instance = new GlobalData();
      }
      return this.instance;
    }
    private constructor() {}

    private user: proto.User = null;

    getUser() {
        return this.user
    }

    setUser(user: proto.User) {
        this.user = user;
    }
}