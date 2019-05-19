import _ from 'lodash';
import faker from 'faker';
import React from 'react';
import { Breadcrumb, Container, Segment, Grid, Header, Card, Button, Tab, Label, Menu, Image, Table, Checkbox, Form, Divider, Rating, List } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import { Pagination } from 'swiper/dist/js/swiper.esm';

import CustomHeader from '../components/header';
import ProductTab from '../components/product-tab';
import ProductRelated from '../components/product-related';

const styles = {
  galleryNavContainer: {
    height: 100 + '%'
  },
  productInfoContainer:{
    border: 'none',
    boxShadow: 'none'
  },
  tabContainer:{
    border: 'none',
    boxShadow: 'none'
  },
  productShortDescContainer:{
    minHeight: 300,
    height: 100 + '%'
  },
  buyNowBtn: {
    background: 'rgb(172, 20, 90)',
    color: 'rgb(255, 255, 255)',
    position: 'absolute',
    bottom: 30,
    right: -20
  },
  navGalleryItem: {
    padding: 5
  },
  relatedProductContainer: {
    border: 'none',
    boxShadow: 'none'
  },
  breadcrumbContainer: {
    paddingBottom: 20
  }
}

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
  _navGallery = (index) => {
    alert(index);
  }
  
  render(){
    const productData = {
      name: faker.commerce.productName(),
      featuredImage: _.times(3, () => 'assets/images/product-' + faker.random.number({min: 1, max: 6}) + '.jpg'),
      price: faker.commerce.price(),
      color: faker.commerce.color()
    };
    return(
      <Container>
        {/* Header Component */}
        <CustomHeader />
        <Container>
          <Segment style={styles.productInfoContainer}>
            <Breadcrumb
              style={styles.breadcrumbContainer}
              icon='right angle'
              sections={breadcrumbSections} />
            <Grid stackable>
              <Grid.Column width={2} floated='left'>
                <Segment style={styles.galleryNavContainer}>
                  {/* Vertical Swiper */}
                  {/* <Grid.Row> */}
                    {productData.featuredImage.map((navItem, index)=>{
                      return(
                        <Grid.Row key={index} style={styles.navGalleryItem}>
                          <Image src={navItem} fluid onClick={ () => this.gallerySwiper.scrollBy(index) }/>
                        </Grid.Row>
                      )
                    })}
                  {/* </Grid.Row> */}
                </Segment>
              </Grid.Column>
              <Grid.Column width={8} floated='left'>
                {/* Horizontal Swiper */}
                <Swiper {...galleryParams}>
                  {productData.featuredImage.map((galleryItem, index)=>{
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
                  <Card.Content>
                    <div>
                      <div>
                        <span>Size :</span>
                        <div>
                          {/* Sizing */}
                        </div>
                      </div>
                      <div>
                        <span>Qty :</span>
                        <div>
                          {/* Sizing */}
                        </div>
                      </div>
                    </div>
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
      </Container>
    )
  }
}

export default Product;