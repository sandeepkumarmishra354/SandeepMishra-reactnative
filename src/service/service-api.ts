import axios, { AxiosInstance } from "axios";

/**
 * This is not the ideal way of storing token or any key.
 * Just for the quick development for submission I kept the token here.
 * It can be locally saved.
 */
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmRlZXBrdW1hcm1pc2hyYTM1NEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vc2FuZGVlcGt1bWFybWlzaHJhMzU0IiwiaWF0IjoxNjYxOTYxMzA5LCJleHAiOjE2NjIzOTMzMDl9.e4pM_Oqe4qmpshTXPv4C8th7sYETwbrfC-jwMfLjWqE";

const baseUrl = "https://upayments-studycase-api.herokuapp.com";

class ServiceAPI {
    private static __instance: AxiosInstance | null = null;

    // lazy load
    public static get instance() {
        if (ServiceAPI.__instance === null) {
            ServiceAPI.__instance = axios.create({
                baseURL: baseUrl,
                timeout: 15 * 1000, // 15 seconds
                responseType: "json",
                validateStatus: (status) => true, // don't throw any error
            });
            
            // add an request interceptor to add the bearer token for every request on the fly.
            ServiceAPI.__instance.interceptors.request.use((reqConfig) => {
                const headers = reqConfig.headers ?? {};
                headers["Authorization"] = `Bearer ${token}`;
                reqConfig.headers = headers;
                return reqConfig;
            });
        }
        return ServiceAPI.__instance;
    }
}

export default ServiceAPI;