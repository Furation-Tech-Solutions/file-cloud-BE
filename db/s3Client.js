const { S3Client } = require("@aws-sdk/client-s3");


const S3Client = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
    region: "ap-south-1"
});

module.exports = S3Client;