import { combineReducers } from 'redux'
import productReducer from './product/productReducer'
import selectReducer from './select/selectReducer'

const rootReducer = combineReducers({
  products: productReducer,
  selects : selectReducer
})

export default rootReducer
