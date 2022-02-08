import * as http from 'http';

import { app } from './app';
import { config } from './config'

const server = http.createServer(app);
server.listen(config.PORT, () => {
    console.log(`Listening on port ${ config.PORT }`);
});

process.on('uncaughtException', error => {
    console.log(error);
    server.close(() => {
        process.exit();
    })
});

process.on('unhandledRejection', error => {
    console.log(error);
    server.close(() => {
        process.exit();
    })
});