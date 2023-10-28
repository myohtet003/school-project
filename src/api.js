import axios from "axios";
import './Pages/classes.json'

const BASE_URL = "./Pages/classes.json";

// eslint-disable-next-line no-unused-vars
export const getData = async(url) => {
    const {data} = await axios.get(`${BASE_URL}${url}`);
    return data;
}
