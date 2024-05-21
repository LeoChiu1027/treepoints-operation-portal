import axios from 'axios';

const bashURL = import.meta.env.V_API_BASE_URL;
console.log(bashURL);
axios.defaults.baseURL = bashURL;

export default (app) => {
    app.axios = axios;
    app.$http = axios;

    app.config.globalProperties.axios = axios;
    app.config.globalProperties.$http = axios;
};
