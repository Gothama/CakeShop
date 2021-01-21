const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')
const {check, validationResult }= require("express-validator");
/*
// get the customer password for customer ID
router.post('/customerID', async(req,res) => {
    try{
        const customerID = req.body.customerID;
        const password = req.body.password;
        console.log(customerID);
        console.log(password);
       const data = await Customer.countDocuments({customerID:customerID,password:password})
       if(data==1){
           res.send({message:"verified"});
           return;
       }
       else{
        res.send({message:"Wrong"});
        return;
       }
    }catch(err){
        res.send('Error ' + err)
    }
})*/


// get the customer password for customer ID
router.post('/customerID/:customerID/:password', function(req,res) {


    const customerID = req.params.customerID;
        const password = req.params.password;
        Customer.findOne({ customerID: customerID, password: password },)
        .exec()
        .then(userValid =>{
            if( userValid ){
                res.status(200).json({"Message": userValid});
            }else{
                res.status(200).json({"Message": "unsuccessful"});
            }
        }).catch(err=>{
        res.status(500).json(err);
    })
});












// get the customer password for customer ID
router.get('/allDetails/:customerID', async(req,res) => {
    try{
        const customerID = req.params.customerID;
        console.log(customerID);
    
       const data = await Customer.findOne({customerID:customerID})
       res.json(data);
    }catch(err){
        res.send('Error ' + err)
    }
})

// add new customer 
router.post('/ncustomer', 
[
    check('telephoneNum', "Telephone Number is needed").not().isEmpty(),
    check('address', "address Number is needed").not().isEmpty(),
    check('email', "Telephone Number is needed").isEmail(),
    check("password", "Please enter a vlaid password").isLength({min:6})

],


async(req,res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const customer = new Customer({
       
        customerID: req.body.customerID,
        telephoneNum: req.body.telephoneNum,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const a1 =  await customer.save() 
        res.json(a1)
        res.send("Successfull")
    }catch(err){
        res.send('Error 2'+ err)
    }
})

//delete the customer account
router.delete('/customerID', async(req,res) => {
    try{
        const customerID = req.body.customerID;
           const customer = await Customer.findOneAndDelete({customerID:customerID})
           res.json("done")
    }catch(err){
        res.send('Error ' + err)
    }
  })
  

  //update the customer account
router.patch('/:customerID', async(req,res) => {
    try{
      
           const updateCus = await Customer.update({customerID:req.params.customerID}, 
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