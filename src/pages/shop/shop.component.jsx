import React from "react";
import "./shop.styles.scss";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsAsyncStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../collection/collectionsOverviewContainer.component";
import CollectionPageContainer from "../collection/collectionPageContainer.component";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsyncStart } = this.props;
    fetchCollectionsAsyncStart();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  fetchCollectionsAsyncStart: () => dispatch(fetchCollectionsAsyncStart()),
});
export default connect(null, mapDispatchtoProps)(ShopPage);
