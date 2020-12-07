const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model('Post')
// const fs = require('fs');

// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// //import cloudinary
// const cloudinary = require('cloudinary').v2;
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_APIKEY,
//     api_secret: process.env.CLOUDINARY_APISECRET
// });

router.get('/allpost', requireLogin, (req, res) => {
    Post.find()
        .populate("postedBy", "_id name")
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/createpost', requireLogin, (req, res) => {
    const { title, body, pic } = req.body
    if (!title || !body || !pic) {
        return res.status(422).json({ error: "Please add a Title and Body" })
    }

    //hide password from storing in each post
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo: pic,
        postedBy: req.user
    })
    post.save().then(result => {
        res.json({ post: result })
    })
        .catch(err => {
            console.log(err)
        })
})


router.get('/mypost', requireLogin, (req, res) => {
    Post.find({ postedBy: req.user._id })
        .populate("PostedBy", "_id name")
        .then(mypost => {
            res.json({ mypost })
        })
        .catch(err => {
            console.log(err)
        })
})

// router.post("/imgup", upload.single('file'),function(req,res, next){
//     console.log(req.file)
  
  
//   //use cloudinary uploader to send file
//     cloudinary.uploader.upload(req.file.path, { tags: 'express_sample' })
//       .then(function (image) {
//         console.log('** file uploaded to Cloudinary service');
//         console.dir(image);
  
//           //save file to temp folder and delete file
//         console.log(req.file.path+"\n^^^^^^^^^^^^^^")
//         fs.unlink(req.file.path, err=>{if(err){console.log(err)}})
//         console.log(req.body)
//         // res.json(image.url)
//         // const obj = {
//         //   title:req.body.name,
//         //   caption: req.body.caption,
//         //   imageUrl:image.url,
//         // }
  
//         // let result = postController.create(obj)
//         // console.log(result)
//         // res.json(result)
//       })
//       .then(function () {
//         console.log('img saved');
//       })
//   })
module.exports = router