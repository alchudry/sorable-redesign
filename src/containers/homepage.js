import _ from 'lodash';
import faker from 'faker';
import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { actions as productActions } from '../reducers/productReducers';

class HomepageContainer extends React.Component{
  state = {}
  generateData = () => {
    var counter = 1;
    const category = ['dress','moeslim-wear']
    this.setState({
      productData: _.times(100, () => ({
        _id: counter++,
        name: faker.commerce.productName(),
        category: category[faker.random.number({min: 0, max: category.length})],
        featuredImage: 'assets/images/product-' + faker.random.number({min: 1, max: 6}) + '.jpg',
        galleryImage: _.times(3, () => 'assets/images/product-' + faker.random.number({min: 1, max: 6}) + '.jpg'),
        price: faker.commerce.price(),
        color: faker.commerce.color()
      }))
    })
  }
  render(){
    return(
      <Container>
        <div>Data Generate for MongoDB</div>
        <Button primary onClick={() => this.generateData()}>Generate Data</Button>
        <div>
          {JSON.stringify(this.state.productData)}
        </div>
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