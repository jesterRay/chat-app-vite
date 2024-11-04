import axios from "axios";

const axiosInterface = axios.create({
    baseURL: "http://127.0.0.1:8000",
})

export default axiosInterface