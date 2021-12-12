import axios from "axios";
import { getDataFromStorage } from "../utils/storage";

const token = getDataFromStorage();

<<<<<<< HEAD
const instance = axios.create({
  headers: {
    Authorization: token === null ? null : `Bearer ${token.accessToken}`,
  },
});
=======
const instance = axios.create(
    {
        headers: {
            "Authorization" : token === null ? null : `Bearer ${token.accessToken}`,
        }
    }
)
>>>>>>> develop

export default instance;
