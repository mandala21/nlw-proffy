import express from "express";
import { createUserController } from "./useCases/CreateUser";
import { CreateSubjectController } from "./useCases/CreateSubject/CreateSubjectController";
import { createSubjectController } from "./useCases/CreateSubject";

let routes = express.Router()

routes.post('/users', (req,res)=>{
    return createUserController.handle(req,res)
})

routes.post('/subjects',(req,res)=>{
    return createSubjectController.handle(req,res)
})

export default routes
