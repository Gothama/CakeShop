const express = require('express')
const router = express.Router()
const Cakes = require('../models/cake')
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dbecgupu0",
    api_key: "373627428599719",
    api_secret: "5OjMXiYSBBHdf-MPUSHETJI5LOc"
  });


router.get('/', async(req,res) => {
    try{
           const cake = await Cakes.find()
           res.json(cake)
    }catch(err){
        res.send('Error ' + err)
    }
})



router.get('/baker/:bid', async(req,res) => {
    try{
            const bid = req.params.bid;
           const data = await Cakes.find({bakerID:bid})
           res.json(data)
    }catch(err){
        res.send('Error ' + err)
    }
})



router.post('/ncake', async(req,res) => {
    const cake = new Cakes({
       
        bakerID: req.body.bakerID,
        cakeID: req.body.cakeID,
        cakeName: req.body.cakeName,
        ingrediants: req.body.ingrediants,
        cImageUrl: req.body.cImageUrl,
        addedDate: req.body.addedDate
    })

    try{
        const a1 =  await cake.save() 
        res.json(a1)
        res.send("Successfull")
    }catch(err){
        res.send('Error')
    }
})

router.post('/upload', (req, res) => {


    if (req.files === null) {
      return res.status(200).json({ msg: "No file is Selected to upload. Please select a file first!" })
    }
    const file = req.files.img;
    console.log("uplod file is:", file);
  
  
    cloudinary.uploader.upload(file.tempFilePath, function (err, result) {
  
      if (err) {
  
        console.log("Error is :", err);
  
        return res.status(400).json({ msg: "Server Error not Uploaded" })
  
      } else {
        console.log("Result is :", res);
  
  
  
  
        console.log("response URL: ", result.url);
        res.status(200).json({ URL: result.url })
  
      }
  
  
    });
  
  
  
  })



module.exports = router