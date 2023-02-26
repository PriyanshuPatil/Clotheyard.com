import * as types from "./Order.types";

const initState = {
  orders: [],
  loading: false,
  error: false,
};

export const orderReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_ORDER_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.GET_ORDER_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.GET_ORDER_SUCCESS: {
      return { ...state, loading: false, error: false, orders: payload };
    }
    case types.ADD_ORDER_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.ADD_ORDER_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.ADD_ORDER_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case types.UPDATE_ORDER_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.UPDATE_ORDER_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.UPDATE_ORDER_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case types.DELETE_ORDER_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.DELETE_ORDER_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.DELETE_ORDER_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    default: {
      return state;
    }
  }
};
