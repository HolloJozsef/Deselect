import express, { Router } from 'express'
import mongoose from 'mongoose'
import Student from './student'
import StudentRoute from './StudentRoute'
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.json());
app.use(express.json())

const connection_url=`mongodb+srv://admin:admin@cluster0.y2bp6.mongodb.net/deselectDB?retryWrites=true&w=majority`;
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.get('/',(req,res)=>{
    res.send("home");
});
app.use("/api",StudentRoute );

const port =  9000;

app.listen(port, ()=>console.log(`listening on localhost: ${port}`));