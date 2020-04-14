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
