import { mobileMenuDropdownActionTypes } from "./mobile-menu-dropdown.types";
const INITIAL_STATE = {
  showDoropdownMenu: false,
};

const mobileMenuDropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mobileMenuDropdownActionTypes.TOGGLE_MOBILE_MENU_DROPDOWN:
      return {
        ...state,
        showDoropdownMenu: !state.showDoropdownMenu,
      };
    default:
      return state;
  }
};

export default mobileMenuDropdownReducer;
