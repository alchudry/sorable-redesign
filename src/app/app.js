import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Page
import HomepageContainer from '../containers/homepage';

// Redux
import configStore from './store';
const store = configStore();

class App extends React.Component{
  render() {
    return (
      // Initial Setup + Redux
      <Provider store={store}>
        <Router>
          <Route exact={true} path='/' render={ ()=> <HomepageContainer/> }/>
        </Router>
      </Provider>
    )
  }
}
export default App;