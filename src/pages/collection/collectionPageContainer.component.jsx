import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Collection from "../collection/collection.component";
import { selectCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/hoc/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionPageContainer;
