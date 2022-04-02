import webService from './webSerivce';
import ServiceBuilder from './serviceBuilder';

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

    async login(data) {
        const url = `${this.serviceAddress}/login`;
        const method = 'POST';

        const response =  await webService({
            url,
            method,
            data
        });
        return response;
    }
}

export default AuthService;