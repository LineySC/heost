import {
  CREATE_STOCK,
  UPDATE_STOCK,
  DELETE_STOCK,
  GET_STOCK,
  GET_ALL_STOCKS,
  STOCK_SUCCESS,
  STOCK_FAILURE,
} from "../actions/stockAction";

const initialState = {
  isLoading: false,
  error: null,
  stock: [{ columnsName: [{}], columnsContent: [{}], filteredData: [] }],
  allStock: [],
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STOCK:
      return { ...state, isLoading: true, error: null };
    case GET_ALL_STOCKS:
      return { ...state, allStock: action.payload };
    case GET_STOCK:
      return { ...state, data: action.payload };
    case UPDATE_STOCK:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
