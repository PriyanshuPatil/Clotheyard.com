import * as types from "./Product.types";

const initState = {
  products: [],
  singleProduct: undefined,
  loading: false,
  error: false,
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.GET_PRODUCT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.GET_PRODUCT_SUCCESS: {
      return { ...state, loading: false, error: false, products: payload };
    }
    case types.GETSINGLE_PRODUCT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.GETSINGLE_PRODUCT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.GETSINGLE_PRODUCT_SUCCESS: {
      return { ...state, loading: false, error: false, singleProduct: payload };
    }
    case types.ADD_PRODUCT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.ADD_PRODUCT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.ADD_PRODUCT_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case types.UPDATE_PRODUCT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.UPDATE_PRODUCT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.UPDATE_PRODUCT_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case types.DELETE_PRODUCT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.DELETE_PRODUCT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.DELETE_PRODUCT_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    default: {
      return state;
    }
  }
};
