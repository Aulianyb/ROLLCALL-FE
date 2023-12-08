import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://tubes-tst-18221066-rollcall.azurewebsites.net/",
});

export default apiClient;
