import axios from 'axios';
import UtilUserData from '../../config/config';
/*global  process:true*/
const host = process.env.REACT_APP_API_URL;

const instance = axios.create({
    baseURL: host
});

instance.defaults.headers.common['Content-Type'] = 'application/json';

export const post = async (url, body) => {
    instance.defaults.headers.common['Authorization'] = UtilUserData.getToken();
    const response = await instance.post(url, body)

    if (response.status === 200)
        return await response.data
    else
        throw new Error(response.data)
}

export const put = async (url, body) => {
    instance.defaults.headers.common['Authorization'] = UtilUserData.getToken();
    const response = await instance.put(url, body)
    if (response.status === 200)
        return await response.data
    else
        throw response
}

export const deleteRequest = async (url, id) => {
    instance.defaults.headers.common['Authorization'] = UtilUserData.getToken();
    const response = await instance.delete(url + id)
    if (response.status === 200)
        return await response.data
    else
        throw response
}

export const get = async (url) => {
    instance.defaults.headers.common['Authorization'] = UtilUserData.getToken();
    const response = await instance.get(url)
    if (response.status === 200)
        return await response.data
    else
        throw response
}
export const getWithParams = async (url, params) => {
    instance.defaults.headers.common['Authorization'] = UtilUserData.getToken();
    const response = await instance.get(url + params)
    if (response.status === 200)
        return await response.data
    else
        throw response
}
export const postFetch = async (url, body) => {
    const response = await fetch(host + url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(body), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok)
        return await response.json()
    else
        throw response
}