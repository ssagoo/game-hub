import axios, { AxiosError, CanceledError } from "axios";
import Consts from "./GlobalConsts";

export default axios.create({
    params: {
        key:Consts.RawGApiKey,
    },
    baseURL:Consts.RawGApiBaseUrl,
    //headers: {}
})

export {CanceledError, AxiosError}