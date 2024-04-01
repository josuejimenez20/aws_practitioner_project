const { getAllSercicesModel,
    getServiceInformationByIdModel } = require('../../models/servicesModels/serviceModels');

const getAllSercicesService = async () => {

    try {

        const result = await getAllSercicesModel();

        return {
            code: 200,
            message: 'All Service Information',
            success: true,
            data: result
        }

    } catch (error) {
        return error;
    }
}

const getServiceInformationByIdService = async (serviceId) => {

    try {
        const result = await getServiceInformationByIdModel(serviceId);

        return {
            code: 200,
            message: "Service information got it",
            data: result
        }

    } catch (error) {
        return error;
    }

}

module.exports = {
    getAllSercicesService,
    getServiceInformationByIdService
}