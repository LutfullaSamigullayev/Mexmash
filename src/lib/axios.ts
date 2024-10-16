import axios from "axios";

export const Axios = axios.create({
    baseURL: "https://mexmash-dev-api.main-gate.appx.uz",
})

Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token")
    config.headers.Authorization = `Bearer ${token}`

    return config;
})

// Axios.interceptors.response.use(
//     (config) => config,
//     async (error: any) => {
//       const originalConfig = error.config;
  
//       const refresh_token = localStorage.getItem("refresh_token");
  
//       if (refresh_token && error.response?.status === 401 && originalConfig && !originalConfig?.isRetry) {
//         originalConfig.isRetry = true;
  
//         try {
//           const response = await axios.post("/api/v1/admin/refresh",{ refresh_token });
//           const tokens = response.data;
  
//           localStorage.setItem("access_token", tokens.access_token);
//           localStorage.setItem("refresh_token", tokens.refresh_token);
//         } catch (error) {
//           localStorage.removeItem("access_token");
//           localStorage.removeItem("refresh_token");
//         }
  
//         return Axios.request(originalConfig);
//       }
  
//       return Promise.reject(error);
//     }
//   );