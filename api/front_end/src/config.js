import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://hotel-bookingg.herokuapp.com/api/"
})
