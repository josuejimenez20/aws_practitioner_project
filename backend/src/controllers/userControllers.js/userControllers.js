const { logInServices, signInUserService
} = require('../../services/userServices/userServices');

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
    signInUserController
}