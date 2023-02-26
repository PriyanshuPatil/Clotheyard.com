import * as types from "./Order.types";
import axios from "axios";

export const getOrders = (token) => (dispatch) => {
  dispatch({ type: types.GET_ORDER_LOADING });
  axios
    .get(`${process.env.REACT_APP_URL}orders`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) =>
      dispatch({ type: types.GET_ORDER_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_ORDER_ERROR }));
};

export const getAllOrders = (token) => (dispatch) => {
  dispatch({ type: types.GET_ORDER_LOADING });
  axios
    .get(`${process.env.REACT_APP_URL}orders/allorders`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) =>
      dispatch({ type: types.GET_ORDER_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_ORDER_ERROR }));
};

export const addOrders =
  ({ token, payload, clearCartItems }) =>
  (dispatch) => {
    console.log(payload);
    dispatch({ type: types.ADD_ORDER_LOADING });
    axios
      .post(`${process.env.REACT_APP_URL}orders`, payload, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        clearCartItems();
        dispatch({ type: types.ADD_ORDER_SUCCESS });
      })
      .catch((err) => dispatch({ type: types.ADD_ORDER_ERROR }));
  };

export const updatedOrders =
  ({ token, payload, _id }) =>
  (dispatch) => {
    dispatch({ type: types.UPDATE_ORDER_LOADING });
    axios
      .patch(`${process.env.REACT_APP_URL}orders/${_id}`, payload, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => dispatch({ type: types.UPDATE_ORDER_SUCCESS }))
      .catch((err) => dispatch({ type: types.UPDATE_ORDER_ERROR }));
  };

export const deleteOrders =
  ({ token, _id }) =>
  (dispatch) => {
    dispatch({ type: types.DELETE_ORDER_LOADING });
    axios
      .delete(`${process.env.REACT_APP_URL}orders/${_id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch({ type: types.DELETE_ORDER_SUCCESS });
      })
      .catch((err) => dispatch({ type: types.DELETE_ORDER_ERROR }));
  };
