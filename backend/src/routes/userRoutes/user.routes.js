const { Router } = require('express');
const { logInUserController, signInUserController
} = require('../../controllers/userControllers.js/userControllers');
const { logInUserValidator } = require('../../validator/userValidators/userValidator');
const { signInUserValidator } = require('../../validator/userValidators/signInValidator');
const router = Router();

router.post('/signin', signInUserValidator, signInUserController);
router.post('/login', logInUserValidator, logInUserController);

module.exports = router;