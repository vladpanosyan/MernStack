const mongoose = require('mongoose');
const config = require('config')
const url = config.get('mongo_uri')
const UserModel = require('./models/user')

module.exports = mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then( _ => {
    return {
        user: UserModel
    }
})
.catch(err => {
    console.log(err.message, 999);
    throw err.message
})
