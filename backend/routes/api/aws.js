const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const { memoryStorage } = require('multer');
const { uploadToS3, deleteFromS3 } = require('../../utils/s3');

// from multer:

const upload = multer({ 
    storage: memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    }
})

router.post('/upload', upload.single("image"), asyncHandler(async (req, res) => {
   
    const { file } = req;
    // console.log("file in upload route", file)

    const { error, url, key } = await uploadToS3({ file });


    if (error) return res.status(500).json({ message: error.message})

    return res.status(201).json({ url: url, key: key })


}));

router.delete("/:imgKey", asyncHandler(async (req, res) => {
   
    const imgKey = req.params.imgKey;
    // console.log("file in upload route", file)

    const { error, key } = await deleteFromS3({ imgKey });


    if (error) return res.status(500).json({ message: error.message})

    return res.status(200).json({ key: key })


}))

module.exports = router;