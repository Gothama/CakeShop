const express = require('express')
const router = express.Router()
const User = require('../models/user')





router.get('/:userName', async(req,res) => {
    try{
            const UserName = req.params.userName;
           const data = await User.find({userName:UserName})
            res.json(data);
    }catch(err){
        res.send('Error ' + err)
    }
})



router.post('/nuser', async(req,res) => {
    const user = new User({
       
        userID: req.body.userID,
        userName: req.body.userName,
        telephoneNum: req.body.telephoneNum,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const a1 =  await user.save() 
        res.json(a1)
        res.send("Successfull")
    }catch(err){
        res.send('Error')
    }
})



module.exports = router