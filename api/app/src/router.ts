import express from "express";
import { createUserController } from "./useCases/CreateUser";
import { CreateSubjectController } from "./useCases/CreateSubject/CreateSubjectController";
import { createSubjectController } from "./useCases/CreateSubject";
import { createLessonController } from "./useCases/LessonCreate";
import { retriveUserController } from "./useCases/RetriveUser";
import { lessonListController } from "./useCases/LessonList";

let routes = express.Router()

routes.post('/users', (req,res)=>{
    return createUserController.handle(req,res)
})

routes.get('/users/:id', (req,res)=>{
    return retriveUserController.handle(req,res)
})

routes.post('/subjects',(req,res)=>{
    return createSubjectController.handle(req,res)
})

routes.post('/lessons',(req,res)=>{
    return createLessonController.handle(req,res)
})

routes.get('/lessons',(req,res)=>{
    return lessonListController.handle(req,res)
})

export default routes
