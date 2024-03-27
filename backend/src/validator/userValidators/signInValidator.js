const { check } = require('express-validator');
const { validateResult } = require('../indexValidator');

const signInUserValidator = [
    check("user_id").not().exists(),
    check("name").exists().not().isEmpty(),
    check("lastname").exists().not().isEmpty(),
    check("email").exists().not().isEmpty().isEmail(),
    check("password").exists().not().isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];
module.exports = {
    signInUserValidator
}