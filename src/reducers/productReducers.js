// Redux Types
export const types = {
  FETCH: 'PRODUCT_REQUEST',
  FETCH_ALL: 'ALL_PRODUCT_REQUEST'
}

export const defaultState = {
  id: '',
}

// Redux States
export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH:
      alert("Redux Initial Setup Test!")
      return state;
    case types.FETCH_ALL:
      return state;
    default:
      return state;
  }
}

// Redux Actions
export const actions = {
  fetch_product: () => ({ type: types.FETCH }),
  fetch_all_product: () => ({ type: types.FETCH_ALL })
}