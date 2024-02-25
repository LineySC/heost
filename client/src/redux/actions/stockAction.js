import Axios from "../../_config/Axios";

export const CREATE_STOCK = "CREATE_STOCK";
export const UPDATE_STOCK = "UPDATE_STOCK";
export const DELETE_STOCK = "DELETE_STOCK";
export const GET_STOCK = "GET_STOCK";
export const GET_ALL_STOCKS = "GET_ALL_STOCK";
export const STOCK_SUCCESS = "CLIENT_STOCK";
export const STOCK_FAILURE = "CLIENT_STOCK";

export const createStock = (data) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_STOCK });
    try {
      const response = await Axios.post("/stock/new", data);
      if (response.status === 201) {
        const data = response.data;
        dispatch({ type: STOCK_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: STOCK_FAILURE, payload: error.response.data });
    }
  };
};

export const getAllStock = () => {
  return (dispatch) => {
    return Axios.get("/stock/all")
      .then((res) => {
        dispatch({ type: GET_ALL_STOCKS, payload: res.data });
      })
      .catch((err) => ({ type: STOCK_FAILURE, payload: err.response }));
  };
};

export const getStock = (stockType, stockId) => {
  return (dispatch) => {
    return Axios.get(`/stock/${stockType}/${stockId}`)
      .then((res) => dispatch({ type: GET_STOCK, payload: res.data }))
      .catch((err) => ({ type: STOCK_FAILURE, payload: err.response }));
  };
};

export const updateStock = (update, stockId) => {
  return (dispatch) => {
    return Axios.put(`/stock/${stockId}`, update)
      .then((res) => dispatch({ type: UPDATE_STOCK, payload: res.data }))
      .catch((err) => ({ type: STOCK_FAILURE, payload: err.response }));
  };
};
