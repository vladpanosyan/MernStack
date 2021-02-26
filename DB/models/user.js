const bcrypt = require('bcryptjs')
const { Schema, model, Types } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Userschema = new Schema({
    email: {
        type: String,
        required: true,
        uniq: true
    },
    password: {
        type: String,
        required: true
    },
    links: [{ type: Types.ObjectId, ref: 'Link' }]
},
    { timestamps: true });
Userschema.plugin(uniqueValidator)

Userschema.static('generateHashForPass', async (pass) => {
    const salt = await bcrypt.genSalt(12);
    return bcrypt.hash(pass, salt);
})
Userschema.static('validPassword', async(password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
})
module.exports = model('User', Userschema)
