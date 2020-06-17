import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectOneProduct } from '../redux'


class Compare extends Component {
    render() {
        const { compareSummary, products: { selectedProduct } } = this.props
        return (
            <div style={{ width: "300px", marginTop: "100px" }}>
                <div>Add a product</div>
                <select onChange={(e) => this.props.selectOneProduct(e.target.value)}>
                    <option value="">-Chose-</option>
                    {compareSummary.titles &&
                        Object.keys(compareSummary.titles).map((item) => {
                            return selectedProduct.indexOf(item) === -1 && <option key={item} value={item}>{compareSummary.titles[item].title}</option>
                        })}
                </select>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        selects: state.selects,
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectOneProduct: (payload) => dispatch(selectOneProduct(payload))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Compare)

