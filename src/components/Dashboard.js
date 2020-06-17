import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux'
import Table from '../common/Table'

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { products: { featuresList }, error } = this.props.products
    return (
      <div>
        {
          error ? <div>{error}</div> :
            <Table featuresList={featuresList} />
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
