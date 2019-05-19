import _ from 'lodash';
import React from 'react';
import { Container, Segment, Grid, Image, Checkbox, Dropdown } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Swiper from 'react-id-swiper';
import { Pagination } from 'swiper/dist/js/swiper.esm';

import { actions as productActions } from '../reducers/productReducers';

import CustomHeader from '../components/header';
import ProductCard from '../components/product-card';
import RecommendedSlider from '../components/recommended-slider';


const styles = {
  sliderContainer: {
    paddingLeft: 0,
    marginRight: 5
  },
  sliderImageStyle: {
    maxHeight: 400,
    width: 100 + '%'
  },
  bannerImageStyle: {
    maxHeight: 400,
    width: 100 + '%'
  },
  productContainer: {
    border: 'none',
    boxShadow: 'none'
  },
  promotionBannerContainer: {
    border: 'none',
    boxShadow: 'none'
  },
  colPromotionBanner: {
    paddingLeft: 0,
    paddingRight: 0
  }
}

const swiperParams = {
  modules: [Pagination],
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
}

const priceRangeOptions = [
  {
    key: 1,
    text: 'ALL',
    value: 'all'
  },
  {
    key: 2,
    text: 'Below $50',
    value: '0-50'
  },
  {
    key: 3,
    text: '$50 - $100',
    value: '50-100'
  },
]

const sliderItem = [
  {
    id: 1,
    name: 'Slider One',
    banner: 'assets/images/slider-1.jpeg'
  },
  {
    id: 2,
    name: 'Slider Two',
    banner: 'assets/images/slider-2.jpeg'
  },
  {
    id: 3,
    name: 'Slider Three',
    banner: 'assets/images/slider-3.jpeg'
  }
]

class ProductCategoryContainer extends React.Component{
  constructor(props){
    super(props);
    this.listenScroll();
  }

  componentWillMount(){
    {/* Initial Data Load */}
    this.props.fetch_product();
  }

  listenScroll = () =>{
    window.onscroll = () => {
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        this.props.fetch_product();
      }
    }
  }
  render(){
    {/* Product State */}
    const { dataProduct, dataRecommendedProduct } = this.props.product;
    return(
      <Container>
        {/* Header Component */}
        <CustomHeader />
        {/* Segment Random Product & Banner */}
        <Segment style={styles.promotionBannerContainer}>
          <Grid
            stackable
            columns='equal'>
            <Grid.Row>
              <Grid.Column
                width={12}
                style={styles.sliderContainer}
              >
                {/* Swiper */}
                <Swiper
                  {...swiperParams}
                >
                  {sliderItem.map((slider) =>
                    <div key={slider.id.toString()}>
                      <Image
                        style={styles.sliderImageStyle}
                        src={slider.banner}/>
                    </div>
                  )}
                </Swiper>
              </Grid.Column>
              <Grid.Column style={styles.colPromotionBanner}>
                <Image 
                  style={styles.bannerImageStyle}
                  src='assets/images/banner.jpg'/>
              </Grid.Column >
            </Grid.Row>
          </Grid>
        </Segment>
        {/* Segment Filter Product */}
        <Segment >
          <Grid
            stackable
            centered
          >
            <Grid.Row>
              {/* Harga */}
              <Grid.Column
                computer={4}
                mobile={16}
                tablet={6}
              >
                <Grid.Row>
                  Rentang Harga
                </Grid.Row>
                <Grid.Row>
                  <Dropdown
                    search
                    selection
                    fluid
                    options={priceRangeOptions}
                    placeholder='Price Range'/>
                </Grid.Row>
              </Grid.Column>
              {/* Warna */}
              <Grid.Column
                computer={4}
                mobile={16}
                tablet={6}
              >
                <Grid.Row>
                  Pilih Warna
                </Grid.Row>
                <Grid.Row>
                  <Checkbox>Merah</Checkbox>
                </Grid.Row>
              </Grid.Column>
              {/* Ukuran Baju & Celana */}
              <Grid.Column
                computer={4}
                mobile={16}
                tablet={6}
              >
                <Grid.Row>
                  Pilih Ukuran Baju dan Celana
                </Grid.Row>
                <Grid.Row>
                  {/* Checkbox */}
                </Grid.Row>
              </Grid.Column>
              {/* Ukuran Baju & Sepatu */}
              <Grid.Column
                computer={4}
                mobile={16}
                tablet={6}
              >
                <Grid.Row>
                  Pilih Ukuran Sepatu
                </Grid.Row>
                <Grid.Row>
                  {/* Checkbox */}
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {/* Segment Product List */}
        <Segment style={styles.productContainer}>
          <Grid stackable centered>
            {dataProduct.map((data, index)=>{
                if(index != 6){
                  return(
                    <Grid.Column 
                      key={index}
                      computer={5}
                      mobile={16}
                      tablet={6}
                    >
                      <ProductCard
                        productImage={data.featuredImage}
                        productName={data.name}
                        productPrice={data.price}
                      />
                    </Grid.Column>
                  )
                }else{
                  return(
                    <Grid.Column
                      key={index}
                      computer={10}
                      mobile={16}
                      tablet={16}>
                      <RecommendedSlider data={dataRecommendedProduct}/>
                    </Grid.Column>
                  )
                }
            })}
            <Grid.Row>
            </Grid.Row>
          </Grid>
        </Segment>
        {/* Footer */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryContainer);