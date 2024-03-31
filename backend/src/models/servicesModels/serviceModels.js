const { queryToAWSPractitionerDB } = require('../../database/queryAWSPraticionerDB');

const getAllSercicesModel = async () => {

    const query = `
    
    SELECT service_information_id, name, image_path 
    FROM service_information;
    `;

    try {

        const result = await queryToAWSPractitionerDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

const getServiceInformationByIdModel = async (serviceId) => {
    
    const query = `
    
    SELECT *
    FROM service_information
    WHERE service_information_id = '${serviceId}';
    `;

    try {

        const result = await queryToAWSPractitionerDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllSercicesModel,
    getServiceInformationByIdModel
}