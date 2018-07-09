import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import {
  fetchPhotos,
  _fetchPhotosStart,
  _fetchPhotosSuccess,
  _fetchPhotosFailure,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
} from "../actions/photos.actions";
import photosResponse from "../../_mocks_/photos.response.json";
import config from "../../config";
import { _initialState } from "../reducers/photos.reducer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("photos action tests", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("fetchPhotos should bring photos from the API", () => {
    fetchMock.getOnce(config.apis.photo, {
      body: photosResponse,
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: FETCH_PHOTOS_REQUEST },
      { type: FETCH_PHOTOS_SUCCESS, photos: photosResponse }
    ];

    const store = mockStore({ photosReducer: _initialState });

    return store.dispatch(fetchPhotos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fetchPhotos should bring the error from the API", () => {
    fetchMock.getOnce(config.apis.photo, {
      body: {},
      status: 500
    });

    const expectedActions = [
      { type: FETCH_PHOTOS_REQUEST },
      {
        type: FETCH_PHOTOS_FAILURE,
        error: new Error("INVALID STATUS CODE: 500")
      }
    ];

    const store = mockStore({ photosReducer: _initialState });

    return store.dispatch(fetchPhotos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fetchPhotosStart action ", () => {
    const expected = { type: FETCH_PHOTOS_REQUEST };

    expect(_fetchPhotosStart()).toMatchObject(expected);
  });

  it("fetchPhotosSuccess action ", () => {
    const action = _fetchPhotosSuccess(["a", "b"]);
    const expected = { type: FETCH_PHOTOS_SUCCESS, photos: ["a", "b"] };

    expect(action).toMatchObject(expected);
  });

  it("fetchPhotosFailure action ", () => {
    const action = _fetchPhotosFailure("error");
    const expected = { type: FETCH_PHOTOS_FAILURE, error: "error" };

    expect(action).toMatchObject(expected);
  });
});
