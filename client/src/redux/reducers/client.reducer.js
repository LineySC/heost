import {
  CREATE_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT,
  GET_CLIENT,
  GET_ALL_CLIENTS,
  CLIENT_SUCCESS,
  CLIENT_FAILURE,
} from "../actions/clientAction";

// Reducer
const initialState = {
  client_name: "",
  client_contact_name: "",
  client_contact_number: "",
  client_contact_mail: "",
  client_total_business: 0,
  client_quote_in_progress: 0,
  isLoading: false,
  error: null,
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CLIENT:
      return { ...state, isLoading: true, error: null };
    case UPDATE_CLIENT:
      return { ...state, isLoading: true, error: null };
    case DELETE_CLIENT:
      return { ...state, isLoading: true, error: null };
    case GET_CLIENT:
      return { ...state, isLoading: true, error: null };
    case GET_ALL_CLIENTS:
      return {
        ...state,
        data: action.payload,
      };
    case CLIENT_FAILURE:
      return action.payload;
    default:
      return state;
  }
};
