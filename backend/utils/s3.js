const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

const { S3Client, PutObjectCommand }  = require('@aws-sdk/client-s3');
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey =  process.env.AWS_SECRET_ACCESS_KEY;
const region =  process.env.AWS_REGION;
const bucketname = process.env.S3_BUCKET;

const s3 = new S3Client()

// const s3 = new AWS.S3({
//     region,
//     accessKeyId,
//     secretAccessKey,
//     signatureVersion: 'v4'
// })

const uploadToS3 = async ({ file }) => {

    const key = uuidv4();

    const command = new PutObjectCommand({
        Bucket: bucketname,
        Key: key,
        ContentType: file.mimetype,
        Body: file.buffer
    })

    try {
    
        await s3.send(command);
        return { key };
    } catch(error) {
        console.error('Error uploading file:', error)
    }

}

module.exports = { uploadToS3 };