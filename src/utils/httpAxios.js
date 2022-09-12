import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { Navigate, useNavigate } from "react-router-dom";
import { history } from '../history';


const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(function (config) {
    if (localStorage?.accessToken) {
        config.headers['Auth'] = localStorage?.accessToken;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

const refreshAuthLogic = (failedRequest) => {
    return instance.post("token", { "refreshToken": localStorage?.refreshToken })
        .then((response) => {
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            instance.defaults.headers.common['Auth'] = response.data.accessToken;
            failedRequest.response.config.headers['Auth'] = response.data.token;
            return Promise.resolve();
        })
}

const options = {
    statusCodes: [401, 403],
    shouldRefresh: (error) => {
        if (error.response.status === 403) {
            localStorage.clear()
            history.replace('./login')
        }
        return error
    }
}

createAuthRefreshInterceptor(instance, refreshAuthLogic, options);

// Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
// }, function (error) {
//     const originalConfig = error.config;
//     // error.response.status
//     if (error.response) {
//         if (error.response.status === 401 && !originalConfig._retry) {
//             originalConfig._retry = true;

//             return new Promise(resolve => {
//                 axios.post("http://localhost:4000/v1/token", { "refreshToken": localStorage?.refreshToken })
//                 .then(function (response) {
//                     localStorage.setItem("accessToken", response.data.accessToken);
//                     localStorage.setItem("refreshToken", response.data.refreshToken);
//                     axios.defaults.headers.common['Auth'] = response.data.accessToken;
//                     originalConfig.headers['Auth'] = response.data.accessToken;
//                     resolve(axios(originalConfig))
//                 })
//                 .catch(function (error) {
//                     return Promise.reject(error);
//                 });
//             })

//         }
//         // if (error.response.status === ANOTHER_STATUS_CODE) {
//         //     // Do something 
//         //     return Promise.reject(error.response.data);
//         //   }
//     }
//     // 401 token expire


//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
// });

export default instance