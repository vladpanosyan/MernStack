const RunAppLogic = require('./app_init')
const setRoutes = require('./routes')

const errorHandler = require('./Helpers/errorHandler')

const express = require('express');

const config = require('config');
const PORT = config.get('dev_port');
const app = express();
app.use(express.json());

try {
    require('./DB')
        .then(models => {
            app.listen(PORT, () => console.log(`server runing in port ${PORT}...`));
            const controllers = RunAppLogic(models);
            const apirouter = setRoutes(controllers)
            app.use('/api', apirouter)
            app.use(errorHandler)
        })
        .catch(err => console.log(err, 888))
} catch (error) {
    console.log('db error')
    console.log(error.message)
}



