import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

import useAuth from 'src/stores/auth';
import {logOnDev} from 'src/utils/logger';
import {baseURL} from 'src/constants/config';

const appClient = axios.create({baseURL: baseURL});

appClient.interceptors.request.use(config => {
  const token = useAuth.getState().authToken;
  if (token) {
    //@ts-expect-error add auth token
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const {method, url, params} = response.config;
  const {status} = response;
  // Set Loading End Here
  // Handle Response Data Here
  // Error Handling When Return Success with Error Code Here
  logOnDev(
    `🚀 [API REQUEST] ${method?.toUpperCase()} ${url} | Params ${JSON.stringify(
      params,
    )} | Response ${status}`,
  );

  return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const {message} = error;
    const {method, url} = error.config as AxiosRequestConfig;
    const {status} = (error.response as AxiosResponse) ?? {};

    logOnDev(
      `🚨 [API REQUEST] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`,
    );

    switch (status) {
      case 401: {
        // "Login required"
        break;
      }
      case 403: {
        // "Permission denied"
        break;
      }
      case 404: {
        // "Invalid request"
        break;
      }
      case 500: {
        // "Server error"
        break;
      }
      default: {
        // "Unknown error occurred"
        break;
      }
    }

    if (status === 401) {
      // Delete Token & Go To Login Page if you required.
      // AsyncStorage.clear();
    }
  } else {
    logOnDev(`🚨 [API REQUEST] | Error ${error?.message}`);
  }

  return Promise.reject(error);
};

appClient.interceptors.response.use(onResponse, onErrorResponse);

export default appClient;
