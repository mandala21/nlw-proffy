import express from "express";
import { createUserController } from "./useCases/CreateUser";
import { CreateSubjectController } from "./useCases/CreateSubject/CreateSubjectController";
import { createSubjectController } from "./useCases/CreateSubject";
import { createLessonController } from "./useCases/LessonCreate";

let routes = express.Router()

routes.post('/users', (req,res)=>{
    return createUserController.handle(req,res)
})

routes.post('/subjects',(req,res)=>{
    return createSubjectController.handle(req,res)
})

routes.post('/lessons',(req,res)=>{
    return createLessonController.handle(req,res)
})

export default routes
