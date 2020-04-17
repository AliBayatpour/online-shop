import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import Collection from "../collection/collection.component";

import { connect } from "react-redux";
import { fetchCollectionsAsyncStart } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/hoc/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsyncStart } = this.props;
    fetchCollectionsAsyncStart();
  }
  render() {
    const { match, isFetching } = this.props;
    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={isFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
});
const mapDispatchtoProps = (dispatch) => ({
  fetchCollectionsAsyncStart: () => dispatch(fetchCollectionsAsyncStart()),
});
export default connect(mapStateToProps, mapDispatchtoProps)(ShopPage);
