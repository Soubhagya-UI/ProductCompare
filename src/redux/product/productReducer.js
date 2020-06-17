import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  SELECT_ONE_PRODUCT,
  DELETE_DATA
} from './productTypes'

const initialState = {
  loading: false,
  products: '',
  error: '',
  selectedProduct: [],
  numOfProduct: 0,
}

const reducer = (state = initialState, action) => {
  console.log()
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        selectedProduct: []
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: '',
        selectedProduct: state.selectedProduct.concat(Object.keys(action.payload.compareSummary.titles)[0])
      }
    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
        selectedProduct: []
      }
    case SELECT_ONE_PRODUCT:
      return {
        ...state,
        selectedProduct: state.selectedProduct.concat(action.payload),
        numOfProduct: state.numOfProduct + 1
      }
    case DELETE_DATA:
      return {
        ...state,
        selectedProduct: state.selectedProduct.filter(e => e !== action.payload),
        numOfProduct: state.numOfProduct -1
      }
    default: return state
  }
}

export default reducer
