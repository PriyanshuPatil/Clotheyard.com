import * as types from "./cart.types";
import axios from "axios";

export const getCartItems = (token) => (dispatch) => {
  dispatch({ type: types.GET_CART_LOADING });
  axios
    .get(`${process.env.REACT_APP_URL}cart`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) =>
      dispatch({ type: types.GET_CART_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_CART_ERROR }));
};

export const addCartItems =
  ({ token, payload }) =>
  (dispatch) => {
    dispatch({ type: types.ADD_CART_LOADING });
    axios
      .post(`${process.env.REACT_APP_URL}cart`, payload, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => dispatch({ type: types.ADD_CART_SUCCESS }))
      .catch((err) => dispatch({ type: types.ADD_CART_ERROR }));
  };

export const updateCartItem =
  ({ token, payload, _id, handleChange }) =>
  (dispatch) => {
    dispatch({ type: types.UPDATE_CART_LOADING });
    axios
      .patch(`${process.env.REACT_APP_URL}cart/${_id}`, payload, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch({ type: types.UPDATE_CART_SUCCESS });
        handleChange();
      })
      .catch((err) => dispatch({ type: types.UPDATE_CART_ERROR }));
  };

export const deleteCartItem =
  ({ token, _id, handleChange }) =>
  (dispatch) => {
    dispatch({ type: types.DELETE_CART_LOADING });
    axios
      .delete(`${process.env.REACT_APP_URL}cart/${_id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        handleChange();
        dispatch({ type: types.DELETE_CART_SUCCESS });
      })
      .catch((err) => dispatch({ type: types.DELETE_CART_ERROR }));
  };

export const clearCart =
  ({ token, navigate }) =>
  (dispatch) => {
    dispatch({ type: types.DELETE_CART_LOADING });
    axios
      .delete(`${process.env.REACT_APP_URL}cart/clearcart`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch({ type: types.DELETE_CART_SUCCESS });
      })
      .catch((err) => dispatch({ type: types.DELETE_CART_ERROR }));
  };
