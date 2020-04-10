import { createSelector } from "reselect";

const selectDirectoryItems = (state) => state.directory;

export const selectDirectoryItem = createSelector(
  [selectDirectoryItems],
  (directory) => directory.sections
);
