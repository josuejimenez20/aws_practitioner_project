import axios from 'axios';

export const getServiceInformationById = async (servieId) => {

    try {

        const { data } = await axios.get(`http://localhost:3000/api/v1/service/${servieId}`);

        return data.data;

    } catch (error) {
        const { response } = error;
        return {
            status: response.status,
            message: response.data.message
        };
    }

}