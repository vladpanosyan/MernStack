const express = require('express');
const apiRouter = express.Router();

module.exports = function(controllers) {
    const userRouter = require('./user')(controllers.user)

    apiRouter.use('/users', userRouter);

    return apiRouter;
}