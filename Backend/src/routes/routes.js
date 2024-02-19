import { Router } from "express";


const routers = new Router();

const HomeRoute = routers.get('/', (req, res) => res.json({
    message: 'hello world '
}))


export  {HomeRoute}