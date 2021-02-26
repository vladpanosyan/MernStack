const ServiceFactory = require('./services/ServiceFactory')
const ControllerFactory = require('./controllers/ControllerFactory')

module.exports = models =>{
    const SERVICES = new ServiceFactory(models).create();
    const CONTROLLERS = new ControllerFactory(SERVICES).create();
    return CONTROLLERS
    
}