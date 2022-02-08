import * as express from 'express';
import helmet from 'helmet';
// import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';

import { config } from './config';
import { serviceRouter, serviceTypeRouter } from './routes';

class App {
    public readonly app: express.Application = express();

    constructor() {
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    // this.app.use(cors(App.configureCors))
    this.app.use(express.json);
    this.app.use(express.urlencoded({extended: true}));

    this.mountRoutes()
    this.setupDB();
    }

    // private static configureCors(origin: any, callback: any){
    //     // const whiteList = config.ALLOWED_ORIGIN.split(';');
    //     return callback(null, true)
    //     //
    //     // if(!origin) {
    //     //     return callback(null, true)
    //     // }
    //     //
    //     // if(!whiteList.includes(origin)) {
    //     //   callback(new Error('Cors is not allowed'), false)
    //     // }
    //
    // }

    private setupDB(){
        mongoose.connect(config.MONGO_URI);
        const db = mongoose.connection

        db.on('error', () => {
            console.log('DB problem');
        })
    }
    private mountRoutes(): void {
        this.app.use('/services', serviceRouter);
        this.app.use('/service-types', serviceTypeRouter);
    }
}

export const app = new App().app;