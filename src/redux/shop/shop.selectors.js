import { createSelector } from "reselect";

const selectShopCollections = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShopCollections],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollection],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsFetching = createSelector(
  [selectShopCollections],
  (shop) => shop.isFetching
);

export const selectCollection = (collectionId) =>
  createSelector([selectShopCollection], (collections) =>
    collections ? collections[collectionId] : null
  );
