const express = require('express')
const mongoose = require('mongoose')
const url ='mongodb://localhost/cakefactory'

const app = express()

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method==='OPTIONS'){
        res.header("Access-Control-Allow-Methods", 'PUT, POST, PATCH, DELETE, GET');
        res.status(200).json({});
    }

    next();
});

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.once('open' , ()=>{
    console.log('connected...')
})

app.use(express.json())

const orderingRouter = require('./routes/ordering')
app.use('/ordering' , orderingRouter)

const cakesRouter = require('./routes/cakes')
app.use('/cakes' , cakesRouter)

const userRouter = require('./routes/users')
app.use('/users' , userRouter)

app.listen(9000,()=>{
    console.log('server started')
})