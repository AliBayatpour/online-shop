import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectToggleCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
