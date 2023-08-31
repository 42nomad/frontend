import AWS from "aws-sdk";
import awsConfigUpdate from "./awsConfigUpdate"

const deleteS3 = (imgKey: string) => new Promise((resolve, reject) => {
    awsConfigUpdate();
    const s3 = new AWS.S3();
    s3.deleteObject({
        Bucket: process.env.REACT_APP_BUCKET_NAME || '',
        Key: imgKey
    }, (err, data) => {
        if (err)
            reject(err);
        else if (data)
            resolve(data);
    });
});

export default deleteS3;