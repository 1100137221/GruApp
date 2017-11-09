var _domain = "https://gruchensite.herokuapp.com";

export const domain = _domain;

export const baseURL = domain + "/api/";
// export const baseURL = domain + "/";
const baseConfig = {
  method: '',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
};

export default class FetchHelper {

  constructor() {}

  static Get(url, config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'GET' });
  }

  static Post(url, data = {}, config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'POST', body: data });
  }

  static Put(url, config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'PUT' });
  }

  static PutWithData(url, data = {}, config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'PUT', body: data});
  }

  static Update(url, data = {}, config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'PUT', body: data });
  }

  static Delete(url, data = {}, config = baseConfig) {
    return fetch(`${baseURL}${url}`, {...config, method: 'DELETE', body: data });
  }

  static wrapUrl(url) {
    if (url.indexOf('/') != 0) {
      return `/${url}`;
    } else {
      return url;
    }
  }
}