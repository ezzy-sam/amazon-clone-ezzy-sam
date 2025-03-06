import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-2e9c9/us-central1/api",
  // deployed versions of firebase function
  baseURL: "https://api-b2ls4s5bxa-uc.a.run.app",

  // deployed versions of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-35og.onrender.com/",
});
export {axiosInstance}