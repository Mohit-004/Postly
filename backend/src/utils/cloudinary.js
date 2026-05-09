import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.ClOUDINARY_CLOUD_NAME,
    api_key: process.env.ClOUDINARY_API_KEY,
    api_secret: process.env.ClOUDINARY_API_SECRET
})


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return  null

        //Upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        console.log("File is uploaded on cloudinary", response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)  //revmoce the locally saved temp file as the uploaded opt get failed
    }

    return null;
}

cloudinary.uploader.upload("",
    {
        public_id: ""
    },
    function(error, result) {
        console.log(result);
    }
)

export {uploadOnCloudinary}