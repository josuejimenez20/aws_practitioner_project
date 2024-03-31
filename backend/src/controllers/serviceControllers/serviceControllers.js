const { getAllSercicesService, getServiceInformationByIdService
} = require('../../services/serviceServices/serviceServices');

const getAllSercicesController = async (req, res) => {

    try {

        const { message, data, code } = await getAllSercicesService();

        return res.status(code).json({
            message: message,
            data
        })

    } catch (error) {
        return res.status(500).json({
            message: 'No se pudo obtener la informacion de los servicios'
        });
    }
}

const getServiceInformationByIdController = async (req, res) => {

    try {

        const { service_id } = req.params;

        const { message, data, code } = await getServiceInformationByIdService(service_id);

        return res.status(200).json({
            message,
            data
        })

    } catch (error) {
        return res.statu(500).json({
            message: "Error"
        })
    }

}

module.exports = {
    getAllSercicesController,
    getServiceInformationByIdController
}