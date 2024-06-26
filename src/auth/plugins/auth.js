import { createAuth } from '@websanova/vue-auth/src/v3.js';
import driverAuthBearer from '@websanova/vue-auth/src/drivers/auth/bearer.js';
import driverHttpAxios from '@websanova/vue-auth/src/drivers/http/axios.1.x.js';
import driverRouterVueRouter from '@websanova/vue-auth/src/drivers/router/vue-router.2.x.js';

export default (app) => {
    app.use(
        createAuth({
            plugins: {
                http: app.axios,
                router: app.router
            },
            drivers: {
                http: driverHttpAxios,
                auth: driverAuthBearer,
                router: driverRouterVueRouter
            },
            options: {
                rolesKey: 'type',
                notFoundRedirect: { name: '404' },
                authRedirect: { name: 'login' },
                refreshData: {
                    enabled: false
                }
            }
        })
    );
};
