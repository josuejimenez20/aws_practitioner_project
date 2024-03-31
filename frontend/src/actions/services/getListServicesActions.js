import axios from 'axios';

export const getListAllServicesActions = async () => {

    try {

        const { data } = await axios.get(`http://localhost:3000/api/v1/service/all`);

        return data.data;

    } catch (error) {
        const { response } = error;
        return {
            status: response.status,
            message: response.data.message
        };
    }

}