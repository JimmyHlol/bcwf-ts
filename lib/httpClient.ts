import axios, {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { isServer } from "@/lib/client-server-detector";
import toast from "react-hot-toast";

/**
 * server: query from the resource center
 * client: query to frontend server
 */
export const httpClient: AxiosInstance = axios.create({
  baseURL: isServer() ? process.env.SERVER_API_URL : "/api/",
  timeout: 60000,
});

httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // count collect request information here
    return config;
  },
  (error: AxiosError) => {
    // log error here
    isServer() && console.log("@@request error@@", error);
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (axiosResponse: AxiosResponse<unknown>) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return axiosResponse;
  },
  (err: AxiosError<unknown>) => {
    if (err && err.response && err.response.status) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      const { status } = err.response;
      switch (status) {
        case 504:
        case 404:
          !isServer() && toast.error("Server or network error");
          break;
        case 403:
          !isServer() && toast.error("Access denied");
          break;
        case 401:
          !isServer() && toast.error("Unauthorized");
        case 400: {
          !isServer() && toast.error("Bad request");
          break;
        }
        case 409: {
          !isServer() && toast.error("Conflict");
          break;
        }
        default:
          !isServer() && toast.error("Something went wrong");
      }
    }
    isServer() && console.log("@@response error@@", err);
    return Promise.reject(err);
  }
);
