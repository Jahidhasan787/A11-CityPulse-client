import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
  baseURL: "https://a11-city-pulse-server.vercel.app",
});

const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;