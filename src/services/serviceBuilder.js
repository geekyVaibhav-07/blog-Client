const { services = {} } = require('./../config/config.json');

class ServiceBuilder {
    constructor (service) {
        const {
            protocol = 'https',
            host,
            port
        } = services[service];
        this.serviceAddress = `${protocol}://${host}:${port}`;
    }
}

export default ServiceBuilder;