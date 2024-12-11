import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://app-fe8itjcv4qcd.frontegg.com', // Replace with your API base URL
});

apiClient.interceptors.response.use(
  (response) => response, 
  (error) => {
    console.log(error)
    if (error.response?.status === 401) {
      // Redirect to the desired page
      window.location.href = '/desired-redirect'; // Replace with your custom error page
    }
    return Promise.reject(error);
  }
);
