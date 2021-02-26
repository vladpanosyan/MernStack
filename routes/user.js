const express = require('express');
const router = express.Router();

module.exports = function (userController) {
    router.post('/register', userController.userRegister);
    router.post('/login', userController.userLogin);
    return router;
}