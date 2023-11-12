const AWS = require('aws-sdk');
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey =  process.env.AWS_SECRET_ACCESS_KEY;
const region =  process.env.AWS_REGION;
const bucketname = process.env.S3_BUCKET;


const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

const createUploadURL = async () => {
    const params = {
        Bucket: bucketname,
        Key: Date.now().toString(),
        Expires: 3600,
        ContentType: 'image/jpeg'
    }

    try {
        const url = await s3.getSignedUrlPromise('putObject', params);
        return url;
    } catch(err) {
        console.error('error', "unable to create url")
    }


}

module.exports = { createUploadURL };