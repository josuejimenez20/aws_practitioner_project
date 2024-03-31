const { Router } = require('express');
const { getAllSercicesController, getServiceInformationByIdController
} = require('../../controllers/serviceControllers/serviceControllers');

const router = Router();

router.get('/all', getAllSercicesController);
router.get('/:service_id', getServiceInformationByIdController);


module.exports = router;