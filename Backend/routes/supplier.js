const express = require('express')
const router = express.Router()
const Supplier = require('../models/supplier')

// get the supplier password for customer ID
router.get('/:supplierID', async(req,res) => {
    try{
            const supplierID = req.params.supplierID;
           const data = await Supplier.find({supplierID:supplierID})
            res.json(data);
    }catch(err){
        res.send('Error ' + err)
    }
})


// add new supplier 
router.post('/ncsupplier', async(req,res) => {
    const supplier = new Supplier({
       
        supplierID: req.body.supplierID,
        telephoneNum: req.body.telephoneNum,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const a1 =  await supplier.save() 
        res.json(a1)
        res.send("Successfull")
    }catch(err){
        res.send('Error 2'+ err)
    }
})

//delete the supplier account
router.delete('/:supplierID', async(req,res) => {
    try{
      const supplierID = req.params.supplierID;
           const supplier = await Supplier.findOneAndDelete({supplierID:supplierID})
           res.json("done")
    }catch(err){
        res.send('Error ' + err)
    }
  })

  
  //update the Supplier account
router.patch('/:supplierID', async(req,res) => {
    try{
      
           const updateCus = await Supplier.update({supplierID:req.params.supplierID}, 
            {
                $set:{telephoneNum:req.body.telephoneNum,
                    address:req.body.address,
                    email:req.body.email,
                    password:req.body.password
                
                }
                    
            })
           res.json("done 1")
    }catch(err){
        res.send('Error ' + err)
    }
  })

module.exports = router