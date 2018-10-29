import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addProductSuccess = (id, orderData) => {
  return {
    type: actionTypes.ADD_PRODUCT_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const addProductFaill = error => {
  return {
    type: actionTypes.ADD_PRODUCT_FAILL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const addProduct = orderData => {
  return dispatch => {
    dispatch(addProductSuccess());
    axios
      .post('/admin/add-product', orderData) //
      .then(response => {
        dispatch(addProductSuccess());
      })
      .catch(error => {
        dispatch(addProductFaill(error));
      });
  };
};

export const addInit = () => {
  return {
    type: actionTypes.ADD_INIT
  };
};
