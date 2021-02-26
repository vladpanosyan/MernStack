const { userRegisterValidation, userLoginValidation } = require('./../Helpers/validator')

class UserController {
  constructor(service) {
    this.service = service;
    this.userRegister = this.userRegister.bind(this)
    this.userLogin = this.userLogin.bind(this)
  }
  async userRegister(req, res, next) {
    try {
      const { error, value } = userRegisterValidation(req.body);
      if (error) {
        return next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
      }
      const response = await this.service.userRegister(value)
      res.json(response)

    } catch (error) {
      next(error)
    }

  }
  async userLogin(req, res, next) {
    try {
      const { error, value } = userLoginValidation(req.body);
      if (error) {
        return next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
      }
      const response = await this.service.userLogin(value)
      res.json(response)

    } catch (error) {
      next(error)
    }

  }
}
module.exports = UserController;