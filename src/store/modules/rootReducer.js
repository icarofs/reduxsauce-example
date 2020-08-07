import { combineReducers } from 'redux';

import { reducer as favorites } from './favorites/favoritesDucks';

export default combineReducers({
  favorites,
});
