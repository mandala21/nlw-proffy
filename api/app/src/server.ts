import express, { request, response } from "express";
import { UserRepository } from "./repositories/implementations/UserRepository";
import { CreateUserDTO } from "./useCases/CreateUser/CreateUserDTO";
import { UserTransformer } from "./transformers/UserTransformer";
import { CreateUserUseCase } from "./useCases/CreateUser/CreateUserUseCase";
import routes from "./router";

const app = express()

app.use(express.json())

app.get('/users',(request,response) => {
    return response.json({alive:'yes i am'})
})

app.use(routes)


app.listen(8000,()=>{
    console.log('Server listing 8000...')
})