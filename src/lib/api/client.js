import axios from 'axios';

const client = axios.create();

// const DEBUG = process.env.NODE_ENV === "development";

client.defaults.baseURL = 'https://cbt-api.sdk.xyz/'

 // 글로벌 설정 예시:

 // API 주소를 다른 곳으로 사용함


 // 헤더 설정
/**
 client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
 // 인터셉터 설정
 axios.interceptors.request.use((config) => {
    // In dev, intercepts request and logs it into console for dev
    if (DEBUG) { console.info("✉️ ", config); }
    return config;
  }, (error) => {
    if (DEBUG) { console.error("✉️ ", error); }
    return Promise.reject(error);
  });
 */

export default client;
