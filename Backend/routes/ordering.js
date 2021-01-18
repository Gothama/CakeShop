const express = require('express')
const router = express.Router()
const Orders = require('../models/orders')

//get all the orders in the system
router.get('/', async(req,res) => {
    try{
           const orders = await Orders.find()
           res.json(orders)
    }catch(err){
        res.send('Error ' + err)
    }
})

//get all the orders of a certain customer
router.get('/customer/:cid', async(req,res) => {
    try{
            const cid = req.params.cid;
           const data = await Orders.find({customerID:cid})
           res.json(data)
    }catch(err){
        res.send('Error ' + err)
    }
})

//get all the orders of a certain supplier
router.get('/supplier/:supplierID', async(req,res) => {
    try{
            const supplierID = req.params.supplierID;
           const data = await Orders.find({supplierID:supplierID})
           if(!data){
               return res.json({msg: "There are no any orders for this supplier"});
           }
           else{
                res.json(data)
           }
          
    }catch(err){
        res.send('Error ' + err)
    }
})


// add a order
router.post('/norder', async(req,res) => {
    const order = new Orders({
        customerID: req.body.customerID,
        supplierID: req.body.supplierID,
        cakemodelID: req.body.cakemodelID,
        orderDate: req.body.orderDate,
        requiredDate: req.body.requiredDate,
        quantity:req.body.quantity
    })

    try{
        const a1 =  await order.save() 
        
        res.json(a1)
  
    }catch(err){
        res.send('Error1' + err)
    }
})

//delete the order
router.delete('/:orderID', async(req,res) => {
    try{
            const orderID = req.params.orderID;
           const order = await Orders.findByIdAndDelete({_id:orderID})
           res.json("Successfull")
    }catch(err){
        res.send('Error ' + err)
    }
  })


module.exports = router