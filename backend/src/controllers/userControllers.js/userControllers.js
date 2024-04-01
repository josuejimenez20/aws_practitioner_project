const { logInServices, signInUserService
} = require('../../services/userServices/userServices');

const cloudinary = require("cloudinary").v2;

// Configura Cloudinary con la URL de la variable de entorno
cloudinary.config({
  cloud_name: 'dtmtbvid9',
  api_key: '638174394713967',
  api_secret: 'jHto0FeQeH_6qIsZT3Mm7oSUEhQ'
});

const imageUpload = async (req, res) => {
    try {
        if (!req.files || !req.files.fileImage) {
            return res.status(400).json({ message: 'No se ha enviado ningún archivo' });
        }

        const { fileImage } = req.files;

        // Sube el archivo a Cloudinary
        const { secure_url } = await cloudinary.uploader.upload(fileImage.tempFilePath, { height: 1250, width: 1870, crop: "scale" });

        return res.status(200).json({
            message: 'Archivo subido exitosamente',
            secure_url: secure_url
        });
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        return res.status(500).json({ message: 'Ocurrió un error al subir el archivo' });
    }
};

module.exports = { imageUpload };


const logInUserController = async (req, res) => {

    try {

        const result = await logInServices(req.body);

        if (result.code && result.success === true) {
            return res.status(200).json({
                message: result.message
            })
        }

        // Si no se encuentra un ususario
        return res.status(result.code).json({
            message: result.message
        })


    } catch (error) {
        return res.status(500).json({
            message: "Error to login try again please"
        })
    }
}

const signInUserController = async (req, res) => {
    try {

        const userData = req.body;

        const resultAuthentication = await signInUserService(userData);

        const { success, message, code } = resultAuthentication;

        return res.status(code).json({
            message: message,
            success: success
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error to signin user',
            success: false
        })
    }
}

module.exports = {
    logInUserController,
    signInUserController,
    imageUpload
}