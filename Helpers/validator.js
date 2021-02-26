const JOI = require('joi')

exports.userRegisterValidation = function (userData) {
    const schema = JOI.object().keys({
        email: JOI.string().email().required(),
        password: JOI.string().regex(/^[a-zA-Z0-9]{6,30}$/),

    })
    return schema.validate(userData, options = {})
}

exports.userLoginValidation = function (loginData) {
    const schema = JOI.object().keys({
        email: JOI.string().email().required(),
        password: JOI.string().regex(/^[a-zA-Z0-9]{6,30}$/),

    })
    return schema.validate(loginData, options = {});
}
