import Axios from "../../../_config/Axios";

export const CREATE_PROJECT = "CREATE_PROJECT";
export const MODIFY_PROJECT = "MODIFY_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const ONE_PROJECT = "ONE_PROJECT";
export const ALL_PROJECT = "ALL_PROJECT";
export const PROJECT_SUCCESS = "PROJECT_SUCCESS";
export const PROJECT_FAILURE = "PROJECT_FAILURE";

export const createBusiness = (data) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_PROJECT });
    console.warn(data);
    try {
      const response = await Axios.post("/business/create", data);
      if (response.status === 201) {
        const data = response.data;
        dispatch({ type: PROJECT_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: PROJECT_FAILURE,
        payload: "Une erreur c'est produite lors de la création du projet",
      });
    }
  };
};
export function getAllBusiness() {
  return (dispatch) => {
    return Axios.get("/business/all")
      .then((res) => {
        dispatch({ type: ALL_PROJECT, payload: res.data });
      })
      .catch((err) => ({ type: PROJECT_SUCCESS, payload: err.response }));
  };
}
