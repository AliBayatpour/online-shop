import { createSelector } from "reselect";

const selectDropdownMenu = (state) => state.mobileMenuDropdown;

export const selectToggleMobileDropdownMenu = createSelector(
  [selectDropdownMenu],
  (mobileMenuDropdown) => mobileMenuDropdown.showDoropdownMenu
);
