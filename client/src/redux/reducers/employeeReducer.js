import {
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  ARCHIVE_EMPLOYEE,
  GET_EMPLOYEE,
  GET_EMPLOYEES,
  EMPLOYEE_SUCCESS,
  EMPLOYEE_FAILURE,
} from "./../actions/employeeAction";

const initialState = {
  isLoading: false,
  error: null,
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EMPLOYEE:
      return { ...state, isLoading: true, error: null };
    case UPDATE_EMPLOYEE:
      return { ...state, isLoading: true, error: null };
    case DELETE_EMPLOYEE:
      return { ...state, isLoading: true, error: null };
    case ARCHIVE_EMPLOYEE:
      return { ...state, isLoading: true, error: null };
    case GET_EMPLOYEE:
      return { ...state, isLoading: true, error: null };
    case GET_EMPLOYEES:
      return { ...state, isLoading: true, error: null };
    case EMPLOYEE_FAILURE:
      return { ...state, isLoading: true, error: state.error };
    case EMPLOYEE_SUCCESS:
      return { ...state, isLoading: false, error: false };
    default:
      return state;
  }
};
