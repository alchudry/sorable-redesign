import { createStore, compose, applyMiddleware } from 'redux';
import serviceMiddleWare from '../services/serviceMiddleware'
import mainReducer from '../reducers/index';

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}
const configStore = () => {
  const store = createStore(
    mainReducer,
    compose(
      applyMiddleware(serviceMiddleWare),
      devTools
    )
  )
  return store;
}

export default configStore;