import AWS from "aws-sdk";
import awsConfigUpdate from "./awsConfigUpdate";

const uploadS3 = (imgKey: string, file: File) => new Promise((resolve, reject) => {
    awsConfigUpdate();
    const s3 = new AWS.S3();
    s3.upload({
        Bucket: process.env.REACT_APP_BUCKET_NAME || '',
        Key: imgKey,
        Body: file
    }, (err, data) => {
        if (err)
            reject(err);
        else if (data)
            resolve(data);
    });
});

export default uploadS3;