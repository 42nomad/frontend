import AWS from "aws-sdk";

const awsConfigUpdate = () => {
    AWS.config.update({
        region: process.env.REACT_APP_REGION,
        credentials: {
            accessKeyId: process.env.REACT_APP_ACCESS || '',
            secretAccessKey: process.env.REACT_APP_SECRET || ''
        }
    });
}

export default awsConfigUpdate;