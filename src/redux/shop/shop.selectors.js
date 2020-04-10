import { createSelector } from "reselect";

const selectShopCollections = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShopCollections],
  (shop) => shop.collections
);
