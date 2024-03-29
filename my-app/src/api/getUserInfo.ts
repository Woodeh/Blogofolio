import axios from "axios";
import { urls } from "./urls";
import { authHeader } from "./auth/authHeader";
import { apiErrorHandler } from "./auth/apiErrorHandler";

export const getUserInfo = async () => {
    const response = await axios.get(urls.GET_USERS_INFO, { headers: authHeader()}).catch(apiErrorHandler);
    const data = response.data;
    return data;
}
