import AppServer from './AppServer';

export default class Application {

    app_server: AppServer;

    // auth_server: AuthServer,

    constructor() {
        this.app_server = new AppServer();
    }

}
