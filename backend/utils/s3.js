const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand }  = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey =  process.env.AWS_SECRET_ACCESS_KEY;
const region =  process.env.AWS_REGION;
const bucketname = process.env.S3_BUCKET;

// const s3 = new S3Client()

const s3 = new S3Client({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

const uploadToS3 = async ({ file }) => {

    const key = uuidv4();

    const getCommand = new GetObjectCommand({
        Bucket: bucketname,
        Key: key,
    })

    const url = await getSignedUrl(s3, getCommand);
    // console.log("url!!!", url)

    const putCommand = new PutObjectCommand({
        Bucket: bucketname,
        Key: key,
        ContentType: file.mimetype,
        Body: file.buffer
    })

    try {
    
        await s3.send(putCommand);
        return { url, key };
    } catch(error) {
        console.error('Error uploading file:', error)
    }

}

const deleteFromS3 = async({ imgKey }) => {
    const deleteCommand = new DeleteObjectCommand({
        Bucket: bucketname,
        Key: imgKey
    })

    try {
    
        await s3.send(deleteCommand);
        return { key: imgKey }
    } catch(error) {
        console.error('Error deleting file:', error)
    }

}

module.exports = { uploadToS3, deleteFromS3 };