import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/hoc/with-spinner/with-spinner.component";
import { compose } from "redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { selectIsFetching } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
