import axios from "axios";
import { toast } from "react-toastify";

const handleError = (error) => {
  console.log(error);
  if (error.response === undefined) {
    toast.error("Une erreur est survenue, veuillez réessayer plus tard");
  } else if (error.response.status === undefined) {
    toast.error("Une erreur est survenue, veuillez réessayer plus tard");
  } else if (error.response.status === 400) {
    toast.error(error.response.data, { toastId: 5 });
  } else if (error.response.status === 401) {
    toast.error(error.response.data, { toastId: 5 });
  } else if (error.response.status === 403) {
    toast.error(error.response.data);
  } else if (error.response.status === 404) {
    toast.error(error.response.data);
  } else if (error.response.status === 498) {
    toast.error(error.response.data);
  } else if (error.response.status === 500) {
    toast.error(error.response.data);
  } else if (error.response.status === 503) {
    toast.error(error.response.data);
  } else if (error.response.status === 504) {
    toast.error(error.response.data);
  }
  return Promise.reject({ ...error });
}; /*
let resultToken;
if (localStorage.getItem("_session") === null) {
  resultToken = null;
} else {
  resultToken = JSON.parse(localStorage.getItem("_session"));
}*/

const Axios = axios.create({
  baseURL: "http://192.168.1.64:3030/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use((request) => {
  return request;
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => handleError(error)
);

export default Axios;
