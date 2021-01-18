const express = require('express')
const mongoose = require('mongoose')
const url ='mongodb+srv://learningprogram:E1841349@practice.kyuvy.mongodb.net/thecakeshop?retryWrites=true&w=majority'

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

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const con = mongoose.connection

con.once('open' , ()=>{
    console.log('connected...')
})

app.use(express.json())

const orderingRouter = require('./routes/ordering')
app.use('/ordering' , orderingRouter)

const cakesRouter = require('./routes/cakes')
app.use('/cakes' , cakesRouter)

const customerRouter = require('./routes/customer')
app.use('/customer' , customerRouter)

const supplierRouter = require('./routes/supplier')
app.use('/supplier' , supplierRouter)

const userRouter = require('./routes/user')
app.use('/user' , userRouter)

app.listen(9020,()=>{
    console.log('server started on 9020')
})