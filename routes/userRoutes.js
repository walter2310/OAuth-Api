const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const validateFields = require('../middlewares/validateFields');

const { validateJWT } = require('../middlewares/validateJWT');
const userControllers = require('../controllers/userControllers');

router.get('/', userControllers.getAllUsers);

router.post('/', [
    check('name', 'The name is required').notEmpty(),
    check('email', 'The email must be an email type').notEmpty().isEmail(),
    check('password', 'The password must to be longer than 6 digits').notEmpty().isLength({min: 6}),
    validateFields,
], userControllers.createUser);

router.post('/login', [
    check('email', 'The email or the password is incorrect').notEmpty().isEmail(),
    check('password', 'The email or the password is incorrect').notEmpty().isLength({min: 6}),
    validateFields,
], userControllers.loginUser);

router.patch('/:id', [
    validateJWT,
    validateFields
], userControllers.patchUser);

router.delete('/:id', [
    check('id').isMongoId(),
], userControllers.deleteUser);

module.exports = router;