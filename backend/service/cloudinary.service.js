const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLAUD_NAME,
    api_key: process.env.CLAUD_API_KEY,
    api_secret: process.env.CLAUD_API_SECRET
});

exports.subirFotoCloudinary = async (foto, carpeta) => {
    try {
        console.log(foto,carpeta)
        const {public_id, url } = await cloudinary.uploader.upload(foto , { resource_type: "image", use_filename: true, unique_filename: true, aspect_ratio: "9:16", crop: "fill", folder: `tendefy/${carpeta}`})
        const result = {url, public_id}
        return result
    }
    catch (error) {
        console.log(error)
    }
}
