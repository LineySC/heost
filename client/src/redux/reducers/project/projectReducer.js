import {
  CREATE_PROJECT,
  MODIFY_PROJECT,
  DELETE_PROJECT,
  ONE_PROJECT,
  ALL_PROJECT,
  PROJECT_FAILURE,
  PROJECT_SUCCESS,
} from "../../actions/project/projectAction";

const initialState = {
  isLoading: false,
  error: null,
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return { ...state, isLoading: true, error: null };
    case MODIFY_PROJECT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ONE_PROJECT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ALL_PROJECT:
      return {
        ...state,
        data: action.payload,
        isLoading: true,
        error: null,
      };
    case PROJECT_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    default:
      return state;
  }
};
