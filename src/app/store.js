import { createStore, compose } from 'redux';
import mainReducer from '../reducers/index'

const configStore = () => {
  const store = createStore(
    mainReducer,
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  )
  return store;
}

export default configStore;