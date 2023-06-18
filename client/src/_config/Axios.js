import axios from "axios";

const handleError = (error) => {
  console.log(error);
};

let resultToken;
if (localStorage.getItem("_session") === null) {
  resultToken = null;
} else {
  resultToken = JSON.parse(localStorage.getItem("_session"));
}

const Axios = axios.create({
  baseURL: "http://192.168.1.62:3030/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
/*
Axios.interceptors.request.use((request) => {
  return request;
});

Axios.interceptors.response.use(
  (response) => {

    return response;
  },
  (error) => handleError(error)
);*/

export default Axios;
