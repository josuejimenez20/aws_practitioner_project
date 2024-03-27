import axios from 'axios';

export const loginAction = async (userData) => {

    try {

        const {status, data} = await axios.post(`http://localhost:3000/api/v1/user/login`, userData);

        return {
            status,
            message: data.message
        }

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}