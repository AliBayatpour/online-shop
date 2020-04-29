import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.styles.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { selectToggleMobileDropdownMenu } from "./redux/mobile-menu-dropdown/mobile-menu-dropdown.selectors";

import HomePage from "./pages/homePage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import Checkout from "./pages/checkout/checkout.component";
import { checkUserSession } from "./redux/user/user.actions";
import MobileMenu from "./components/mobile-menu/mobile-menu.component";
import MobileMenuDropdown from "./components/mobile-menu-dropdown/mobileMenuDropdown.component";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { showMobileDropdownMenu } = this.props;
    return (
      <div className="app">
        <MobileMenu />
        {showMobileDropdownMenu ? <MobileMenuDropdown /> : null}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showMobileDropdownMenu: selectToggleMobileDropdownMenu,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
