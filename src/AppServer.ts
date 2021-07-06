import express from 'express';
import {delimitator} from './middlewares/Delimitator';
import open_routes from './routes/open';
import {logger} from './util/Logger';

export default class AppServer {

    private logger = logger;
    private readonly _app: express.Express;
    private _server_app;

    constructor() {

        const app = express();

        const port = process.env.PORT || 9400;

        app.use(delimitator);

        app.use('/api/v1', open_routes);

        this._server_app = app.listen(port, () => this.logger.system('Human Index on port: ' + port));

        this._app = app;

    }

    get app(): express.Express {

        return this._app;

    }

}
