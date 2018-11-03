import axios from 'axios';
import UtilUserData from '../../config/config';
/*global  process:true*/
const host = process.env.REACT_APP_API_URL;

const instance = axios.create({
    baseURL: host
});

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Accept'] = 'application/json';

export const post = async (url, body) => {
    instance.defaults.headers.common['Authorization'] = UtilUserData.getToken();

    try {
        const response = await instance.post(url, body)
        return await response.data;
    }
    catch (ex) {
        if (ex.message.includes('401')) {
            throw 401
        }
        throw ex
    }
}

export const put = async (url, body) => {
    instance.defaults.headers.common['Authorization'] = UtilUserData.getToken();
    try {
        const response = await instance.put(url, body)
        return await response.data;
    }
    catch (ex) {
        if (ex.message.includes('401')) {
            throw 401
        }
        throw ex
    }
}

export const deleteRequest = async (url, id) => {
    instance.defaults.headers.common['Authorization'] = UtilUserData.getToken();
    try {
        const response = await instance.delete(url + id)
        return await response.data;
    }
    catch (ex) {
        if (ex.message.includes('401')) {
            throw 401
        }
        throw ex
    }
}

export const get = async (url) => {
    instance.defaults.headers.common['Authorization'] = UtilUserData.getToken();
    const algo = '';
    try {
        const response = await instance.get(url)
        return await response.data;
    }
    catch (ex) {
        if (ex.message.includes('401')) {
            throw 401
        }
        throw ex
    }


}
export const getWithParams = async (url, params) => {
    instance.defaults.headers.common['Authorization'] = UtilUserData.getToken();
    try {
        const response = await instance.get(url + params)
        return await response.data;
    }
    catch (ex) {
        if (ex.message.includes('401')) {
            throw 401
        }
        throw ex
    }
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