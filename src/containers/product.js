import _ from 'lodash';
import faker from 'faker';
import React from 'react';
import Swiper from 'react-id-swiper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Breadcrumb, Container, Segment, Grid, Header, Card, Button, Image, Responsive, Visibility, Input } from 'semantic-ui-react';
import { Pagination } from 'swiper/dist/js/swiper.esm';

import { actions as productActions } from '../reducers/productReducers';

import {ResponsiveContainer} from '../components/responsive-container';
import { styles } from '../styles/productStyle';
import { getWidth } from '../app/helper';
import ProductTab from '../components/product-tab';
import ProductRelated from '../components/product-related';
import CheckboxFilter from '../components/checkbox-filter';



const galleryParams = {
  modules: [Pagination],
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
}

const breadcrumbSections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'Product', content: 'Product', link: true },
  { key: 'Current Product', content: 'Current Product', active: true },
]


class Product extends React.Component{
  componentDidMount(){
    const { match: { params } } = this.props;
    this.props.fetch_product(params.productId);
  }
  
  render(){
    const dataProduct = {
      name: faker.commerce.productName(),
      galleryImage: _.times(3, () => 'assets/images/product-' + faker.random.number({min: 1, max: 6}) + '.jpg'),
      price: faker.commerce.price(),
      color: faker.commerce.color()
    };
    const { selectedProduct, isLoading } = this.props.product;
    return(
      <div>
        {/* Header Component */}
        <ResponsiveContainer>
          <Container>
            <Segment style={styles.productInfoContainer}  loading={isLoading}>
              <Breadcrumb
                style={styles.breadcrumbContainer}
                icon='right angle'
                sections={breadcrumbSections} />
              <Grid stackable>
                <Grid.Column
                  width={2}
                  floated='left' >
                  <Responsive
                    getWidth={getWidth}
                    minWidth={Responsive.onlyTablet.minWidth}
                  >
                    <Visibility once={false}>
                      <Segment style={styles.galleryNavContainer}>
                        {/* Vertical Swiper */}
                        {/* <Grid.Row> */}
                          {dataProduct.galleryImage.map((navItem, index)=>{
                            return(
                              <Grid.Row key={index} style={styles.navGalleryItem}>
                                <Image src={navItem} fluid onClick={ () => alert(index) }/>
                              </Grid.Row>
                            )
                          })}
                        {/* </Grid.Row> */}
                      </Segment>
                    </Visibility>
                  </Responsive>
                </Grid.Column>
                <Grid.Column width={8} floated='left'>
                  {/* Horizontal Swiper */}
                  <Swiper {...galleryParams}>
                    {dataProduct.galleryImage.map((galleryItem, index)=>{
                      return(
                        <Image key={index} src={galleryItem} fluid/>
                      )
                    })}
                  </Swiper>
                </Grid.Column>
                <Grid.Column width={6} floated='right'>
                  <Segment style={styles.productShortDescContainer}>
                    <Header as='h2'>Mokzilla Stripe V-Neck Mini Dress</Header>
                    <Header as='h3'>$900</Header>
                    <Card.Description>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu quam pharetra, luctus sem non, maximus arcu.
                    </Card.Description>
                    <Card.Content style={styles.productMetaContainer}>
                      <Grid.Row>
                        <Grid.Row>
                          <Header as='h4'>Size :</Header>
                        </Grid.Row>
                        <Grid.Row>
                          <CheckboxFilter type='text' content='S' onClick={()=>{}}/>
                          <CheckboxFilter type='text' content='M' onClick={()=>{}}/>
                          <CheckboxFilter type='text' content='L' onClick={()=>{}}/>
                          <CheckboxFilter type='text' content='XL' onClick={()=>{}}/>
                        </Grid.Row>
                      </Grid.Row>
                    </Card.Content>
                    <Button style={styles.buyNowBtn}>
                      Buy Now
                    </Button>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Segment>
            <Segment style={styles.tabContainer}>
              <ProductTab />
            </Segment>
            <Segment style={styles.relatedProductContainer}>
              <ProductRelated />
            </Segment>
          </Container>
        </ResponsiveContainer>
      </div>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));