import * as types from "./cart.types";

const initState = {
  cartItems: [],
  loading: false,
  error: false,
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_CART_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.GET_CART_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.GET_CART_SUCCESS: {
      return { ...state, loading: false, error: false, cartItems: payload };
    }
    case types.ADD_CART_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.ADD_CART_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.ADD_CART_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case types.UPDATE_CART_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.UPDATE_CART_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.UPDATE_CART_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case types.DELETE_CART_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.DELETE_CART_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.DELETE_CART_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    default: {
      return state;
    }
  }
};
