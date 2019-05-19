import _ from 'lodash';
import faker from 'faker';
import React from 'react';
import { Breadcrumb, Container, Segment, Grid, Header, Card, Button, Tab, Label, Menu, Image, Table, Checkbox, Form, Divider, Rating, List } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';

import CustomHeader from '../components/header';

const panes = [
  {
    menuItem: (
      <Menu.Item key='description'>
        Details
      </Menu.Item>
    ),
    render: () => {
      return(
        <Tab.Pane attached={false}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna dui, bibendum in magna ac, lobortis venenatis dui. Proin porttitor dolor turpis, eget porttitor arcu semper non. Vestibulum tellus elit, pulvinar non porttitor quis, venenatis non purus. Suspendisse vulputate erat tortor, venenatis porttitor turpis sodales nec. Vestibulum aliquet elit placerat, condimentum dui tincidunt, elementum velit. Proin finibus pellentesque sem ut dapibus. Mauris eget porta nulla, vehicula sodales elit. Aenean imperdiet, neque sit amet vestibulum dapibus, ex tortor malesuada lectus, non dignissim orci lectus eget sem. In hac habitasse platea dictumst. Phasellus volutpat elit sed sapien blandit, non imperdiet purus ultricies. Cras congue odio nunc, ac interdum nisl vehicula et. Praesent placerat enim nec vehicula scelerisque. 
          </p>
          <p>
          Phasellus malesuada diam vel turpis placerat, quis faucibus libero pretium. Curabitur cursus euismod eleifend. Nunc egestas diam libero, sed semper eros ultrices ut. Cras porttitor auctor dapibus. Sed in nunc dignissim, tincidunt sapien non, posuere risus. Cras bibendum dictum eros quis luctus. Proin lobortis risus vitae diam tempus dignissim. 
          </p>
        </Tab.Pane>
      )
    },
  },
  {
    menuItem: (
      <Menu.Item key='additional'>
        Additional Information
      </Menu.Item>
    ),
    render: () => {
      return(
        <Tab.Pane attached={false}>
          Tab 2 Content
        </Tab.Pane>
      )
    },
  },
  {
    menuItem: (
      <Menu.Item key='rating'>
        Rating<Label>2</Label>
      </Menu.Item>
    ),
    render: () => {
      return(
        <Tab.Pane attached={false}>
          <List>
            <List.Item>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Farrizal</Card.Header>
                  <Card.Meta>Software Engineer</Card.Meta>
                  <Rating icon='star' defaultRating={5} maxRating={5}/>
                  <Card.Description>The quality is good and the shipping is really fast.</Card.Description>
                </Card.Content>
              </Card>
            </List.Item>
            <List.Item>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Alchudry</Card.Header>
                  <Card.Meta>System Analyst</Card.Meta>
                  <Rating icon='star' defaultRating={4} maxRating={5}/>
                  <Card.Description>The quality is good and the shipping is really fast.</Card.Description>
                </Card.Content>
              </Card>
            </List.Item>
          </List>
          
          <Divider />
          <Header as='h3'>Write Your Own Review</Header>
          <p>How do you rate this product?</p>
          <Table celled compact definition>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell/>
                <Table.HeaderCell>1 STAR</Table.HeaderCell>
                <Table.HeaderCell>2 STAR</Table.HeaderCell>
                <Table.HeaderCell>3 STAR</Table.HeaderCell>
                <Table.HeaderCell>4 STAR</Table.HeaderCell>
                <Table.HeaderCell>5 STAR</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {/* Quality Rating */}
              <Table.Row>
                <Table.Cell collapsing>
                  Quality
                </Table.Cell>
                <Table.Cell >
                  <Checkbox slider/>
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
              </Table.Row>
              {/* Price Rating */}
              <Table.Row>
                <Table.Cell>
                  Price
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input placeholder=' Fill Your Full Name' />
            </Form.Field>
            <Form.Field>
              <label>Summary of Review</label>
              <input placeholder=' Fill Summary of Your Review ' />
            </Form.Field>
            <Form.TextArea label='Review' placeholder='Tell us more about your experience...' />
            <Button secondary type='submit'>Submit Review</Button>
          </Form>
        </Tab.Pane>
      )
    },
  },
];

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

const relatedParams = {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
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
    const relatedProductData = _.times(10, () => ({
      name: faker.commerce.productName(),
      featuredImage: 'assets/images/product-' + faker.random.number({min: 1, max: 6}) + '.jpg',
      price: faker.commerce.price(),
      color: faker.commerce.color()
    }));
    console.log(relatedProductData);
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
                  <Button style={styles.buyNowBtn}>
                    Buy Now
                  </Button>
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment style={styles.tabContainer}>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
          </Segment>
          <Segment style={styles.relatedProductContainer}>
            <Header as='h2'>Customer Also Bought</Header>
            {/* Related Product Swiper */}
            <Swiper {...relatedParams}>
              {relatedProductData.map((product, index)=>{
                return(
                  <div key={index}>
                    <Card raised image={product.featuredImage} />
                  </div>
                )
              })}
            </Swiper>
          </Segment>
        </Container>
      </Container>
    )
  }
}

export default Product;