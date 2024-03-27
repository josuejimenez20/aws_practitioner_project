import axios from 'axios';

export const registerAction = async (userData) => {

    try {

        const { status, data } = await axios.post(`http://localhost:3000/api/v1/user/signin`, userData);

        return {
            status,
            message: data.message
        }

    } catch (error) {
        const { response } = error;
        return {
            status: response.status,
            message: response.data.message
        };
    }

}