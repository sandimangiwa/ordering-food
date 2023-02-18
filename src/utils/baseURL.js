import axios from "axios";

export default axios.create({baseURL: process.env.NODE_ENV === 'production' ? process.env.production.REACT_APP_API_URL : process.env.REACT_APP_API_URL})