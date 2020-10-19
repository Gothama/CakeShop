const express = require('express')
const router = express.Router()
const Orders = require('../models/orders')


router.get('/', async(req,res) => {
    try{
           const orders = await Orders.find()
           res.json(orders)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/customer/:cid', async(req,res) => {
    try{
            const cid = req.params.cid;
           const data = await Orders.find({customerID:cid})
           res.json(data)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/baker/:bid', async(req,res) => {
    try{
            const bid = req.params.bid;
           const data = await Orders.find({bakerID:bid})
           res.json(data)
    }catch(err){
        res.send('Error ' + err)
    }
})



router.post('/norder', async(req,res) => {
    const order = new Orders({
        customerID: req.body.customerID,
        bakerID: req.body.bakerID,
        cakeID: req.body.cakeID,
        orderDate: req.body.orderDate,
        addedDate: req.body.addedDate
    })

    try{
        const a1 =  await order.save() 
        res.json(a1)
        res.send("Successfull")
    }catch(err){
        res.send('Error')
    }
})



module.exports = router