import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { actions as productActions } from '../reducers/productReducers';

class HomepageContainer extends React.Component{
  render(){
    return(
      <Container>
        <div>Initial Setup!</div>
        <Button primary>Testing Semantic Button</Button>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...productActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer);