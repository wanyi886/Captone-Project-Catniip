const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const { memoryStorage } = require('multer');
const { uploadToS3 } = require('../../utils/s3');

// from multer:

const upload = multer({ 
    storage: memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    }
})

router.post('/upload', upload.single("image"), asyncHandler(async (req, res) => {
   
    const { file } = req;
    console.log("file in upload route", file)

    const { error, key } = uploadToS3({ file });

    if (error) return res.status(500).json({ message: error.message})

    return res.status(201).json({ key })


}))

module.exports = router;