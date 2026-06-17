const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");
require('dotenv').config()

cloudinary.config({
    cloud_name:process.env.CLAUD_NAME,
    api_key:process.env.CLAUD_API_KEY,
    api_secret:process.env.CLAUD_API_SECRET
}); 

const subirFoto = async () => {
    try {
        const result = await cloudinary.uploader.upload(`ciro.jpg`, { resource_type: "image", use_filename : true, unique_filename : false,  aspect_ratio: "9:16",crop: "fill"})
        console.log(result)
        return JSON.stringify(result)
    }
    catch (error) {
        console.log(error)
    }
}
subirFoto()