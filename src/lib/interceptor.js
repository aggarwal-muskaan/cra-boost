import axios from 'axios';

import { HttpErrorResponse } from '@/constants/HTTPErrorResponse';
import { camelizeKeys } from '@/utils';

const DEBUG = import.meta.env.MODE === 'development';
// const VITE_DEV_AUTHORIZATION = import.meta.env.VITE_DEV_AUTHORIZATION;

const axiosInstance = axios.create();

export const Interceptor = async ({
  methodType = 'GET',
  url,
  params,
  payload,
  formData,
  postJSON = false,
  headers = {},
  isMultiPartFormData = false,
  isJsonResponseExpected = true,
  includeCredentials = true,
}) => {
  let customHeaders = {
    // Authorization: VITE_DEV_AUTHORIZATION,
  };

  // Do the changes with request headers here
  if (methodType === 'GET') {
    headers = {
      'content-type': 'application/json',
      ...customHeaders,
      ...headers,
    };
  } else if (methodType === 'POST' || methodType === 'PUT' || methodType === 'PATCH') {
    if (formData)
      headers = {
        ...customHeaders,
        ...headers,
      };
    else if (postJSON)
      headers = {
        'content-type': 'application/json',
        ...customHeaders,
        ...headers,
      };
    else if (isMultiPartFormData) {
      headers = {
        ...customHeaders,
        ...headers,
      };
    } else
      headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        ...customHeaders,
        ...headers,
      };
  }

  const config = {
    method: methodType,
    url,
    params,
    data: payload ? JSON.stringify(payload) : formData,
    headers,
    // timeout: DEBUG ? 0 : 5000,
    withCredentials: includeCredentials,
    responseType: isJsonResponseExpected ? 'json' : 'text',
  };

  return await axiosInstance(config);
};

axiosInstance.interceptors.request.use(
  (config) => {
    /** In dev mode, intercepts request and logs it into console for dev */
    if (DEBUG) {
      console.info('✉️ : ', config);
    }
    return config;
  },
  (error) => {
    if (DEBUG) {
      console.error('✉️ ', error);
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response;
    const refinedResponse = response.config.responseType === 'json' ? camelizeKeys(data) : data;
    return refinedResponse;
  },
  (error) => {
    console.log('RESPONSE ERROR', error);
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        alert('You are not authorized');
      }

      data.message = data.message || getResponseErrorMsg(status);
    }
    return Promise.reject({ ...error });
  }
);

const getResponseErrorMsg = (statusCode) => {
  if (statusCode < 400) return false;

  let is5XX = false;
  if (statusCode >= 500 && statusCode <= 511) {
    is5XX = true;
  }

  return HttpErrorResponse[is5XX ? '5XX' : '4XX'][statusCode];
};
