const services = require('./index')

module.exports = class ServiceFactory {
    constructor(models) {
        this.models = models
        // console.log(services)
    }
    create() {
        const SERVICES = {};
        let modelNames = Object.keys(this.models)
        for(let model of modelNames) {
            SERVICES[model] = new services[model](this.models[model]);
        }
        return SERVICES
    }
}
