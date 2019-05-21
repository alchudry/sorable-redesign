import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import { Navigation } from 'swiper/dist/js/swiper.esm';

export const relatedParams = {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

export const relatedProductData = _.times(10, () => ({
  name: faker.commerce.productName(),
  featuredImage: 'assets/images/product-' + faker.random.number({min: 1, max: 6}) + '.jpg',
  price: faker.commerce.price(),
  color: faker.commerce.color()
}));