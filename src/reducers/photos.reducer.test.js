import { REHYDRATE } from "redux-persist";

import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
} from "../actions/photos.actions";
import photosReducer, { _initialState } from "./photos.reducer";

describe("photosReducer tests", () => {
  it("FETCH_PHOTOS_REQUEST action in reducer", () => {
    const state = {
      ..._initialState,
      error: "something",
      loading: true,
      photos: ["a", "b"]
    };
    const action = { type: FETCH_PHOTOS_REQUEST };
    const expected = { ..._initialState, loading: true, photos: ["a", "b"] };

    expect(photosReducer(state, action)).toMatchObject(expected);
  });

  it("FETCH_PHOTOS_SUCCESS action in reducer", () => {
    const state = {
      ..._initialState,
      loading: true,
      photos: ["a", "b"]
    };
    const action = { type: FETCH_PHOTOS_SUCCESS, photos: ["a", "b", "c"] };
    const expected = {
      ..._initialState,
      loading: false,
      photos: ["a", "b", "c"]
    };

    expect(photosReducer(state, action)).toMatchObject(expected);
  });

  it("FETCH_PHOTOS_FAILURE action in reducer", () => {
    const state = {
      ..._initialState,
      loading: true,
      photos: ["a", "b"]
    };
    const action = { type: FETCH_PHOTOS_FAILURE, error: "error" };
    const expected = {
      ..._initialState,
      loading: false,
      error: "error",
      photos: ["a", "b"]
    };

    expect(photosReducer(state, action)).toMatchObject(expected);
  });

  it("REHYDRATE action in reducer", () => {
    const state = {
      ..._initialState,
      photos: ["a", "b"]
    };
    const action = {
      type: REHYDRATE,
      payload: { photosReducer: { photos: ["a", "b", "c"] } }
    };
    const expected = {
      ..._initialState,
      photos: ["a", "b", "c"]
    };

    expect(photosReducer(state, action)).toMatchObject(expected);
  });
});
