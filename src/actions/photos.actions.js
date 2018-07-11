import config from "../../config";

export const FETCH_PHOTOS_REQUEST = "FETCH_PHOTOS_REQUEST";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";

/**
 * Fetch all photos from an API.
 */
export const fetchPhotos = () => (dispatch, getState) => {
  dispatch(_fetchPhotosStart());

  return fetch(config.apis.photo)
    .then(resp => _handleFetchPhotosResponse(dispatch, resp))
    .catch(error => dispatch(_fetchPhotosFailure(error)));
};

export const _handleFetchPhotosResponse = (dispatch, response) => {
  if (response.status !== 200) {
    return dispatch(
      _fetchPhotosFailure(new Error(`INVALID STATUS CODE: ${response.status}`))
    );
  }

  return response
    .json()
    .then(json => dispatch(_fetchPhotosSuccess(json)))
    .catch(error => dispatch(_fetchPhotosFailure(error)));
};

export const _fetchPhotosStart = () => ({
  type: FETCH_PHOTOS_REQUEST
});

export const _fetchPhotosSuccess = photos => ({
  type: FETCH_PHOTOS_SUCCESS,
  photos
});

export const _fetchPhotosFailure = error => ({
  type: FETCH_PHOTOS_FAILURE,
  error
});
