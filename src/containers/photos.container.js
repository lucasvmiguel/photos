import React, { Component } from "react";
import { connect } from "react-redux";

import ListPhotos from "../components/ListPhotos";
import { fetchPhotos } from "../actions/photos.actions";

class PhotosContainer extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    const { photos, loading, error } = this.props;

    return <ListPhotos photos={photos} loading={loading} error={error} />;
  }
}

const mapStateToProps = state => ({
  photos: state.photosReducer.photos,
  loading: state.photosReducer.loading,
  error: state.photosReducer.error
});

const mapDispatchToProps = {
  fetchPhotos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosContainer);
