const JWT = require('jsonwebtoken');
const config = require('config')
const SECRET_KEY = config.get('JWT_SECRET_KEY');

module.exports = class CreateJWT{
    constructor(payload = {}, options={}) {
        this.payload = payload;
        this.options = options; 
    }

    createToken() {
        return JWT.sign(this.payload, SECRET_KEY, this.options);
    }

    verifyToken(token) {
        return JWT.verify(token, SECRET_KEY);
    }

}