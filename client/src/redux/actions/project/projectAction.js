import Axios from "../../../_config/Axios";

export const CREATE_PROJECT = "CREATE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const ONE_PROJECT = "ONE_PROJECT";
export const ALL_PROJECT = "ALL_PROJECT";
export const PROJECT_SUCCESS = "PROJECT_SUCCESS";
export const PROJECT_FAILURE = "PROJECT_FAILURE";

export const createBusiness = (data) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_PROJECT });
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
      .catch((err) =>
        dispatch({ type: PROJECT_FAILURE, payload: err.response })
      );
  };
}

export default function updateBusiness(data) {
  return (dispatch) => {
    console.log(data);
    return Axios.put("/business/update/" + data.id, data)

      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: ALL_PROJECT, payload: res.data });
        }
      })
      .catch((err) => {
        console.log(data);
        dispatch({
          type: PROJECT_FAILURE,
          payload: err.data,
        });
      });
  };

  /*return async (dispatch) => {
    console.log(data, dispatch);
    dispatch({ type: UPDATE_PROJECT });
    try {
      const response = await Axios.put(
        "/business/update/" + data.id,
        JSON.stringify(data)
      );
      if (response.status === 200) {
        const data = response.data;
        dispatch({ type: PROJECT_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: PROJECT_FAILURE,
        payload: "Impossible de modifier l'affaire",
      });
    }
  };*/
}
