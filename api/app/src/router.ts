import express from "express";
import { createUserController } from "./useCases/CreateUser";

let routes = express.Router()

routes.post('/users', (req,res)=>{
    return createUserController.handle(req,res)
})

export default routes
