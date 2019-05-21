import _ from 'lodash';
import faker from 'faker';
import {requestApi} from '../services/requestApi';


// Redux Types
export const types = {
  FETCH: 'PRODUCT_REQUEST',
  FETCH_ALL: 'ALL_PRODUCT_REQUEST',
  SET_ALL_PRODUCT: 'SET_ALL_PRODUCT_DATA',
  SET_SELECTED_PRODUCT: 'SET_SELECTED_PRODUCT_DATA',
  SEARCH: 'PRODUCT_SEARCH',
  ADD_COLOR_FILTER: 'ADD_PRODUCT_COLOR_FILTER'
}

export const defaultState = {
  id: '',
  isLoading: true,
  searchKeyword: '',
  searchResult: [],
  dataProduct: [],
  dataRecommendedProduct: [],
  productFilter: {
    color: [],
  }
}

// Redux States
export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH:
      return { ...state, isLoading: true };
    case types.FETCH_ALL:
      return { ...state, isLoading: true };
    case types.SET_ALL_PRODUCT:
      // From Faker as Recommended Product
      var generateDataRecommendedProduct = _.times(10, () => (
        {
          name: faker.commerce.productName(),
          featuredImage: 'assets/images/product-' + faker.random.number({min: 1, max: 6}) + '.jpg',
          price: faker.commerce.price(),
          color: faker.commerce.color()
        }
      ))
      state.dataRecommendedProduct = generateDataRecommendedProduct;
      // From API
      state.dataProduct.push(...action.payload);
      return { ...state, isLoading: false };
    case types.SET_SELECTED_PRODUCT:
      return { ...state, isLoading: false };
    case types.SEARCH:
      return { ...state };
    case types.ADD_COLOR_FILTER:
      // Not Yet
      state.productFilter.color.push(action.color)
      return { ...state };
    default:
      return state;
  }
}

// Redux Actions
export const actions = {
  fetch_product: (productId) => {
    return requestApi({
      path: "/products/"+productId,
      onSuccess: setSelectedProduct,
      label: types.FETCH
    })
  },
  fetch_all_product: () => {
    return requestApi({
      path: "/products",
      onSuccess: setProductData,
      label: types.FETCH_ALL
    })
  },
  search_product: () => ({ type: types.SEARCH}),
  add_color_filter: (color) => ({ type: types.ADD_COLOR_FILTER, color: color}),
}

const setProductData = (data) => {
  return {
    type: types.SET_ALL_PRODUCT,
    payload: data,
  };
}

const setSelectedProduct = (data) => {
  return {
    type: types.SET_SELECTED_PRODUCT,
    payload: data,
  };
}