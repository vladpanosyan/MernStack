const controllers = require('./index')

module.exports = class ControllerFactory {
    constructor(services) {
        this.services = services
    }
    create() {
        const CONTROLLERS = {};
        let controllerNames = Object.keys(this.services)
        for(let controller of controllerNames) {
            CONTROLLERS[controller] = new controllers[controller](this.services[controller]);
        }
        return CONTROLLERS
    }
}
