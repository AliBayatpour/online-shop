import { cartActionTypes } from "./cart.types";
import { addCartItem, clearCartItem, reduceCartItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.CART_VISIBLE:
      return {
        ...state,
        hidden: false,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, action.payload),
      };
    case cartActionTypes.REDUCE_ITEM:
      return {
        ...state,
        cartItems: reduceCartItem(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
