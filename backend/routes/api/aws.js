const express = require('express');
const router = express.Router();
const { createUploadURL } = require('../../utils/s3')


router.get('/imgUrl', async (req, res) => {
    const url = await createUploadURL();
    console.log("url", url)
    res.send({ url })
})

module.exports = router;