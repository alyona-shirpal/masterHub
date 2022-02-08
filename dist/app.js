"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const helmet_1 = require("helmet");
// import * as cors from 'cors';
const mongoose = require("mongoose");
const morgan = require("morgan");
const config_1 = require("./config");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.app = express();
        this.app.use(morgan('dev'));
        this.app.use((0, helmet_1.default)());
        // this.app.use(cors(App.configureCors))
        this.app.use(express.json);
        this.app.use(express.urlencoded({ extended: true }));
        this.mountRoutes();
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
    setupDB() {
        mongoose.connect(config_1.config.MONGO_URI);
        const db = mongoose.connection;
        db.on('error', () => {
            console.log('DB problem');
        });
    }
    mountRoutes() {
        this.app.use('/services', routes_1.serviceRouter);
        this.app.use('/service-types', routes_1.serviceTypeRouter);
    }
}
exports.app = new App().app;
//# sourceMappingURL=app.js.map