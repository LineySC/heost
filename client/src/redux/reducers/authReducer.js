import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./../actions/authAction";

// Reducer
const initialState = {
  username: "",
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        username: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: null,
      };
    default:
      return state;
  }
};
