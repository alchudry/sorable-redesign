import { combineReducers } from 'redux';

import productReducers from './productReducers';

const mainReducer = combineReducers({
  product: productReducers
})

export default mainReducer;