import { REHYDRATE } from "redux-persist";

import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
} from "../actions/photos.actions";

export const _initialState = {
  photos: [],
  loading: false,
  error: null
};

const photosReducer = (state = _initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };

    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        loading: false
      };

    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case REHYDRATE:
      const incoming = action.payload;

      if (incoming) {
        return {
          ...state,
          photos: incoming.photosReducer.photos,
          loading: false
        };
      }

      return { ...state };

    default:
      return state;
  }
};

export default photosReducer;
