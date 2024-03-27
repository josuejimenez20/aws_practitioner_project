const { v4 } = require('uuid')
const { logInModels, verifyUserAuthenticationModels,
    signInUserModels } = require('../../models/userModels/userModels');

const logInServices = async (userData) => {

    try {

        const result = await logInModels(userData);

        console.log(result);

        if (result.length > 0)
            return {
                code: 200,
                message: 'LogIn',
                success: true
            };

        return {
            code: 404,
            message: 'User did not find',
            success: true
        }

    } catch (error) {
        return {
            code: 500,
            message: 'Error to login',
            success: false
        }
    }
}

const signInUserService = async (userData) => {

    try {

        const verifyAuthentication = await verifyUserAuthenticationModels(userData);

        console.log(verifyAuthentication);

        if (verifyAuthentication.length > 0) {
            return {
                success: false,
                code: 409,
                message: "User Already Register"
            }
        }

        const user_id = v4();

        userData.user_id = user_id;

        await signInUserModels(userData);

        return {
            success: true,
            code: 200,
            message: "User have been register",
            userData
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            code: 500,
            message: "Error in server to register user"
        }
    }
}

module.exports = {
    logInServices,
    signInUserService
}