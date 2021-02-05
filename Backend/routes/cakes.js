const express = require('express')
const router = express.Router()
const Cakes = require('../models/cake')
const cloudinary = require("cloudinary").v2;
const Datauri = require('datauri/sync');

cloudinary.config({
    cloud_name: "dbecgupu0",
    api_key: "373627428599719",
    api_secret: "5OjMXiYSBBHdf-MPUSHETJI5LOc"
  });

///////////////////////////////////////////////////////////////

//get all the cake models
router.get('/', async(req,res) => {
    try{
           const cake = await Cakes.find()
           res.json(cake)
    }catch(err){
        res.send('Error ' + err)
    }
})

//get the cake model details
router.get('/:cakeID', async(req,res) => {
  try{
    const cakeID = req.params.cakeID;
         const cake = await Cakes.find({_id:cakeID})
         res.json(cake)
  }catch(err){
      res.send('Error ' + err)
  }
})

//delete the cake model details
router.delete('/:cakeID', async(req,res) => {
  try{
    const cakeID = req.params.cakeID;
         const cake = await Cakes.findByIdAndDelete({_id:cakeID})
         res.json("cake")
  }catch(err){
      res.send('Error ' + err)
  }
})



router.route('/ncake').post(function (req,res) {
  console.log("Apppooo")
  let  cake = new Cakes(req.body);
  cake.save()
      .then(sup=>{
          console.log("Succc")
          res.status(200).json({'appoinment':'successful'});
      }).catch(err=>{
      console.log(err)
      res.status(400).send('fail');
  });
});

//all cakes of a certain supplier
router.get('/baker/:supplierID', async(req,res) => {
    try{
            const supplierID = req.params.supplierID;
           const data = await Cakes.find({supplierID:supplierID})
           res.json(data)
    }catch(err){
        res.send('Error ' + err)
    }
})

////////////////////////////////////////////////////////////////////////////////////////


router.post('/upload', (req, res) => {
/*
try{


    if (req.body.files === null) {
      return res.status(200).json({ msg: "No file is Selected to upload. Please select a file first!" })
    }
    var dUri = new Datauri();
    dUri.format(path.extname('TEST').toString(), req.body.files);

    //const file = req.body.files;
    console.log("uplod file is:", dUri.content);
  
  
    cloudinary.uploader.upload(dUri.content, function (err, result) {
  
      if (err) {
  
        console.log("Error is :", err);
  
        return res.status(400).json({ msg: "Server Error not Uploaded" })
  
      } else {
        console.log("Result is :", res);
  
  
  
  
        console.log("response URL: ", result.url);
        res.status(200).json({ URL: result.url })
  
      }
  
  
    });
  
  }
  catch(err){
    res.send('Error ' + err)
  }
  
  })

*/
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