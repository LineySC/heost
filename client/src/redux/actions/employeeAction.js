import Axios from "../../_config/Axios";

export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const ARCHIVE_EMPLOYEE = "ARCHIVE_EMPLOYEE";
export const GET_EMPLOYEE = "GET_EMPLOYEE";
export const GET_EMPLOYEES = "GET_EMPLOYEE";
export const EMPLOYEE_SUCCESS = "EMPLOYEE_SUCCESS";
export const EMPLOYEE_FAILURE = "EMPLOYEE_FAILURE";

export const createEmployee = (data) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EMPLOYEE });
    try {
      const response = await Axios.post("/employee/new", data);
      if (response.status === 201) {
        const data = response.data;
        dispatch({ type: EMPLOYEE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: EMPLOYEE_FAILURE, payload: error.response.data });
    }
  };
};
