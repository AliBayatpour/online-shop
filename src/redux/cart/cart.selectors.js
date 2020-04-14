import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectToggleCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCountItems = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => cartItem.quantity + accumulatedQuantity,
    0
  )
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems
    .reduce(
      (totalPrice, cartItem) => cartItem.quantity * cartItem.price + totalPrice,
      0
    )
    .toFixed(2)
);
