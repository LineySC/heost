// Actions types
import Axios from "../../_config/Axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

// Action creators
export const login = (username, password, errorCallback) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await Axios.post("/auth/login", {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        const data = response.data;
        dispatch({ type: LOGIN_SUCCESS, payload: data._user });
        localStorage.setItem("loggedInUser", JSON.stringify(data._user));
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Erreur de connexion";
        dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
        errorCallback(errorMessage);
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: "Une erreur s'est produite lors de la connexion ",
      });
      errorCallback("Une erreur s'est produite lors de la connexion");
    }
  };
};

export const checkLoggedIn = () => {
  return (dispatch) => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      dispatch({ type: LOGIN_SUCCESS, payload: dispatch, value: true });
    } else {
      console.error("Error au dispatch");
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("loggedInUser");
    dispatch({ type: LOGOUT });
  };
};
