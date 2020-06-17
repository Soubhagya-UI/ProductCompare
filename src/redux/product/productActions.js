import axios from 'axios'
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  SELECT_ONE_PRODUCT,
  DELETE_DATA
} from './productTypes'

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest())
    axios
      .get('http://www.mocky.io/v2/5e9ebdaa2d00007800cb7697')
      .then(response => {
        const products = response.data.products
        dispatch(fetchProductsSuccess(products))
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error.message))
      })
  }
}

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST
  }
}

export const fetchProductsSuccess = products => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products
  }
}

export const fetchProductsFailure = error => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  }
}

export const selectOneProduct = products => {
  return {
      type: SELECT_ONE_PRODUCT,
      payload: products
  }
}


export const deleteData = item =>{
  console.log(item)
  return {
    type : DELETE_DATA,
    payload:item
  }
}