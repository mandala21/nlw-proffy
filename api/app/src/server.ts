import express, { request, response } from "express";

const app = express()

app.use(express.json())

app.get('/users',(request,response) => {
    
})

app.post('/users',(request,response)=>{
    console.log(request.body);
    return response.json({message: 'Usuario criado'})
})

app.listen(8000,()=>{
    console.log('Server listing 8000...')
})