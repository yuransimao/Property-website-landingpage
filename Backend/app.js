import express from 'express';
import {HomeRoute} from './src/routes/routes';
import ApiFirebaseClient  from './src/Api/api';
import cors from 'cors';

require('dotenv').config();
class App {
    constructor() {
    this.app = express();
    this.middleware();
    this.router();
    this.api();
}

    middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors())
    
}

    router(){
        this.app.use('/', HomeRoute)
    }

    api(){
        this.app.get('/apiFirebaseClient', ApiFirebaseClient)
    }

    
}

export default new App().app;