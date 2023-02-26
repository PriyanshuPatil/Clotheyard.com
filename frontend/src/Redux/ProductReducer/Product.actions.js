import * as types from "./Product.types";
import axios from "axios";
export const getProducts =
  ({ category, page, sort, order,type }) =>
  (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_LOADING });
    axios
      .get(`${process.env.REACT_APP_URL}product`, {
        params: {
          category,
          _page: page,
          _sort: sort,
          _order: order,
          _limit: 12,
          type:type
        },
      })
      .then((res) => {
        dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_PRODUCT_ERROR });
      });
  };

export const getSingleProduct = (id) => (dispatch) => {
  dispatch({ type: types.GETSINGLE_PRODUCT_LOADING });
  axios
    .get(`${process.env.REACT_APP_URL}product/${id}`)
    .then((res) => {
      dispatch({ type: types.GETSINGLE_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GETSINGLE_PRODUCT_ERROR });
    });
};

export const addProduct = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_PRODUCT_LOADING });
  axios
    .post(`${process.env.REACT_APP_URL}product`, payload)
    .then((res) => {
      dispatch({ type: types.ADD_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_PRODUCT_ERROR });
    });
};

export const updateProduct =
  ({ id, payload }) =>
  (dispatch) => {
    dispatch({ type: types.UPDATE_PRODUCT_LOADING });
    axios
      .patch(`${process.env.REACT_APP_URL}product/${id}`, payload)
      .then((res) => {
        dispatch({ type: types.UPDATE_PRODUCT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.UPDATE_PRODUCT_ERROR });
      });
  };

export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_PRODUCT_LOADING });
  axios
    .delete(`${process.env.REACT_APP_URL}product/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_PRODUCT_ERROR });
    });
};
