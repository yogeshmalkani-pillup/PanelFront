import axios from 'axios';
// import { API_BASE_PATH } from './constants';
// import { HelperMethods } from './helperMethods';
const API_BASE_PATH = ''
const client: any = axios.create({
    baseURL: API_BASE_PATH,
});
export const request = async ({
    ...options
}: {
    method: String;
    url: String;
    data?: any;
    headers?: any;
    auth?: any;
}) => {
    const onSuccess = (response: any) => {
        return response;
    };
    const onError = (error: any) => {
        return error;
    };
    let headers = {}
    client.defaults.headers = { ...options.headers, ...headers };
    delete options.headers;
    return client(options).then(onSuccess).catch(onError);
};