const webService = require('./webService');
const ServiceBuilder = require('./serviceBuilder');

class AuthService extends ServiceBuilder {
    constructor() {
        super('authService');
    }

    async isAuthenticated() {
        const url = `${this.serviceAddress}/auth`;
        const method = 'POST';

        const response =  await webService({
            url,
            method,
        });
        return response;
    }
}

module.exports = AuthService;