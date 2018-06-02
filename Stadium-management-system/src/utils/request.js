/**
 *  Revision  History
 *        Initial: 2018/05/31   Wang  Huajian
 */

import axios from 'axios';
import qs from 'qs';
import HttpStatus from 'http-status-codes';

axios.defaults.baseURL = 'http://192.168.0.147:8080';
axios.defaults.timeout = 10000;
// axios.defaults.withCredentials = true; // 解决的是session的问题，不写一直报401未登录

const fetch = (options) => {
  const {
    method,
    data,
    url,
  } = options;

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(`${url}${data ? `?${qs.stringify(data)}` : ''}`);
    case 'delete':
      return axios.delete(url, { data });
    case 'head':
      return axios.head(url, data);
    case 'post':
      return axios.post(url, data);
    case 'put':
      return axios.put(url, data);
    case 'patch':
      return axios.patch(url, data);
    default:
      return axios(options);
  }
};

export default function request(options) {
  return fetch(options).then((response) => {
    // console.log('options: ', options, 'response: ', response);
    if (response.status === HttpStatus.OK) {
      return response.data;
    }
    throw { response }; // eslint-disable-line
  }).catch((error) => {
    const { response } = error;
    console.log('request error: ', error); // eslint-disable-line
    let message, // eslint-disable-line
      status;
    if (response) {
      status = response.status;
      const { data, statusText } = response;
      message = data.message || statusText || HttpStatus.getStatusText(status);
    } else {
      status = 600;
      message = 'Network Error';
    }
    throw { status, message }; // eslint-disable-line
  });
}

export const setToken = function (authToken) { // eslint-disable-line
  axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
};
