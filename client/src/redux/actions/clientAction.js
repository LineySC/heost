import Axios from "../../_config/Axios";

export const CREATE_CLIENT = "CREATE_CLIENT";
export const UPDATE_CLIENT = "UPDATE_CLIENT";
export const DELETE_CLIENT = "DELETE_CLIENT";
export const GET_CLIENT = "GET_CLIENT";
export const GET_ALL_CLIENTS = "GET_ALL_CLIENTS";
export const CLIENT_SUCCESS = "CLIENT_SUCCESS";
export const CLIENT_FAILURE = "CLIENT_FAILURE";

export const createClient = (data, errorCallback) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CLIENT });
    try {
      const response = await Axios.post("/client/new", data);
      if (response.status === 201) {
        const data = response.data;
        dispatch({ type: CLIENT_SUCCESS, payload: data });
      } else {
        const errorData = await response.json();
        const errorMessage = errorData || "erreur de connexion avec le serveur";
        dispatch({ type: CLIENT_FAILURE, payload: errorMessage });
        errorCallback(errorMessage);
      }
    } catch (error) {
      dispatch({
        type: CLIENT_FAILURE,
        payload: "Une erreur c'est produite.",
      });
    }
  };
};

export function getClients() {
  return (dispatch) => {
    return Axios.get("/client/all")
      .then((res) => {
        dispatch({ type: GET_ALL_CLIENTS, payload: res.data });
      })
      .catch((err) => ({ type: CLIENT_FAILURE, payload: err.response }));
  };
}

export function oneClient({ clientId }) {
  return (dispatch) => {
    return Axios.get(`/client/${clientId}`)
      .then((res) => {
        dispatch({ type: GET_CLIENT, payload: res.data });
      })
      .catch((err) => ({ type: CLIENT_FAILURE, payload: err.response }));
  };
}
