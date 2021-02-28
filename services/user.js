const CreateJWT = require('./../Helpers/JWT')
class UserService {
    constructor(model) {
        this.model = model;
        this.userRegister = this.userRegister.bind(this)
        this.userLogin = this.userLogin.bind(this)
    }
    async userRegister({ email, password }) {
        const candidate = await this.model.findOne({ email });
        if (candidate) {
            throw `Entered ${email} is already taken`;
        } else {
            const hashedPassword = await this.model.generateHashForPass(password)
            let user = new this.model({ email, password: hashedPassword })
            user = await user.save()
            return {
                error: false,
                statusCode: 201,
                message: 'user succesfully creted',
                user
            }

        }
    }
    async userLogin({ email, password }) {
        const candidate = await this.model.findOne({ email });
        if (candidate && this.model.validPassword(password, candidate.password)) {
            const token = new CreateJWT({userId: candidate.id}).createToken()
            return {
                error: false,
                statusCode: 200,
                message: 'user succesfully was found',
                user: { id: candidate.id, email: candidate.email},
                token
            }
        } else {
            throw `Entered ${email} or ${password} is not correct`;
        }
    }
}


module.exports = UserService;