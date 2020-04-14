import { cartActionTypes } from "./cart.types";

export const toggleDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const cartVisible = () => ({
  type: cartActionTypes.CART_VISIBLE,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: item,
});

export const reduceItem = (item) => ({
  type: cartActionTypes.REDUCE_ITEM,
  payload: item,
});
