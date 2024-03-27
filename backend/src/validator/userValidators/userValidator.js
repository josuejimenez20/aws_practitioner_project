const { check } = require('express-validator');
const { validateResult } = require('../indexValidator');

const logInUserValidator = [
    check("email").exists().not().isEmpty().isEmail(),
    check("password").exists().not().isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];
module.exports = {
    logInUserValidator
}