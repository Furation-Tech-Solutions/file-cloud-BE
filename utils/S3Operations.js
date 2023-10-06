const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { PutObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");

export async function putObjectUrl(client, putObjectConfig) {
    try {

        const { BucketName, ObjectKey, expiresInSecond } = putObjectConfig;
        const command = new PutObjectCommand({
            Bucket: BucketName,
            Key: ObjectKey,
        })
        return getSignedUrl(client, command, { expiresIn: expiresInSecond })
    } catch (error) {
        throw new Error("Unable to Generate PutObjectURL");
    }
}

export async function deleteObjectURL(client, deleteObjectConfig) {
    try {
        const { BucketName, ObjectKey, expiresInSecond } = deleteObjectConfig;
        const command = new DeleteObjectCommand({
            Bucket: BucketName,
            Key: ObjectKey,
        })
        return getSignedUrl(client, command, { expiresIn: expiresInSecond })
    } catch (error) {
        throw new Error("Unable to Generate PutObjectURL");
    }
}