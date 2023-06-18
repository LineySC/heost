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
        console.log(response);
        const data = response.data;
        console.log(data);
        dispatch({ type: LOGIN_SUCCESS, payload: data._user.username });
        console.log("dispatch ok");
        localStorage.setItem("loggedInUser", data._user.username);
      } else {
        console.error("Error else");
        const errorData = await response.json();
        console.log(errorData);
        const errorMessage = errorData.message || "Erreur de connexion";
        dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
        errorCallback(errorMessage);
      }
    } catch (error) {
      console.log(error);
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
      dispatch({ type: LOGIN_SUCCESS, payload: loggedInUser });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("loggedInUser");
    dispatch({ type: LOGOUT });
  };
};
