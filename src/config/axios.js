import axios from "axios";

const axiosInstance = axios.create({baseURL:"https://api.potterdb.com/v1"})

export default axiosInstance;