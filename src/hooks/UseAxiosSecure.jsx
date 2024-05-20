/* eslint-disable react-refresh/only-export-components */
import axios from "axios";


  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
 })
const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;