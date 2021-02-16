import axios from 'axios';

const httpClient = axios.create();

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('TOKEN');
    let newConfig = config;
    if (token) {
      newConfig = {
        ...newConfig,
        headers: { ...config.headers, Authorization: `Bearer ${token}` },
      };
    }

    if (config.allPages) {
      newConfig = {
        ...newConfig,
        params: {
          ...newConfig.params,
          page: 'unpaged',
        },
      };
    }

    return newConfig;
  },
  (error) => Promise.reject(error),
);

httpClient.interceptors.response.use(
  (response) => ({
    ...response,
    path: response.data.path,
    token: response.data.token,
    data: response.data.data,
    blob: response.data instanceof Blob ? response.data : null,
  }),
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('TOKEN');
    }
    return Promise.reject(error);
  },
);

export default httpClient;
