import axios from "axios";
import { getDataFromStorage } from "../utils/storage";

const token = getDataFromStorage();

const instance = axios.create(
    {
        headers: {
            "Authorization" : token === null ? null : token.accessToken,
        }
    }
)

export default instance;
