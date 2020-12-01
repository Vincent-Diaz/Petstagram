const router = require("express").Router();
const db = require("../../models");

//need fs to allow for removal of posts
const fs = require('fs');
const imgController = require("../../controllers/imgController");
require('dotenv').config();

//create uploads to hold on to temp files
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

//import cloudinary
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    name: process.env.CLOUDINARY_NAME,
    apikey: process.env.CLOUDINARY_APIKEY,
    apisecret: process.env.CLOUDINARY_APISECRET
});

//users own posts and creating posts
router.route("/myPost")
    .get(imgController.findAll)
    .post(imgController.create);

//see all posts by a user
router.route("/:id")
    .get(imgController.findById)
    .get(imgController.update)
    .get(imgController.remove);

//reference to img url in mongodb
router.route('/dbimg')
    .post(imgController.create);

//using multer to organize file data
router.post("/imgup", upload.single('file'),function(req,res, next){
  console.log(req.file)


//use cloudinary uploader to send file
  cloudinary.uploader.upload(req.file.path, { tags: 'express_sample' })
    .then(function (image) {
      console.log('** file uploaded to Cloudinary service');
      console.dir(image);


        //save file to temp folder and delete file
      console.log(req.file.path+"\n^^^^^^^^^^^^^^")
      fs.unlink(req.file.path, err=>{if(err){console.log(err)}})
      res.json(image.url)
    })
    .then(function () {
      console.log('img saved');
    })
})

module.exports = router;