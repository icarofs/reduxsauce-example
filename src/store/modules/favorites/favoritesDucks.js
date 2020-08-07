import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  favoriteRequest: ['repository'],
  favoriteSuccess: ['data'],
  favoriteFailure: ['message'],
});

export const FavoriteTypes = Types;
export const FavoriteActions = Creators;

export const INITIAL_STATE = Immutable({
  loading: false,
  data: [],
  error: null,
});

/* reducers */
export const favoriteRequestReducer = (state, { repository }) => {
  return state.merge({ loading: true, repository });
};

export const favoriteSuccessReducer = (state, { data }) => {
  return state.merge({
    loading: false,
    error: null,
    data: [data],
  });
};

export const favoriteFailureReducer = (state, { message }) => {
  return state.merge({ loading: false, error: message });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FAVORITE_REQUEST]: favoriteRequestReducer,
  [Types.FAVORITE_SUCCESS]: favoriteSuccessReducer,
  [Types.FAVORITE_FAILURE]: favoriteFailureReducer,
});
