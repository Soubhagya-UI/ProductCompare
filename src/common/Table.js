import React from 'react'
import { connect } from 'react-redux'
import Compare from '../components/Compare'
import { deleteData, checkboxClick } from '../redux'

function Table(props) {
    const { featuresList, selects: { isChecked }, products: { products: { compareSummary }, selectedProduct } } = props
    return (
        <div>
            <div style={{ width: "100%", height: "165px", display: "flex", marginTop: "10px" }}>
                <div style={{ width: "300px" }}>
                    <h4>Compare Products</h4>
                    <div className="left-contain">{selectedProduct.length} item selected</div>
                    {selectedProduct.length > 1 &&
                        <div className="left-contain checkbox-style">
                            <input onChange={(e) => props.checkboxClick(e.target.checked)}
                                type="checkbox" checked={props.isChecked} /> Show only difference
                    </div>
                    }
                </div>
                {
                    selectedProduct.map((item) => {
                        return (
                            <div className="div-imageContainer">
                                <img src={compareSummary.images[item]}
                                    alt={compareSummary.titles[item].title} width="100px" height="100px" />
                                {selectedProduct.length > 1 &&
                                    <span className="spanx" onClick={(e) => props.deleteData(item)}>X</span>}
                                <div style={{ height: "30px" }}>{compareSummary.titles[item].title}</div>
                                <div className="flex-justify">
                                    <span><b>{compareSummary.productPricingSummary[item].finalPrice}</b></span>
                                    <span className="padding-five"><del>{compareSummary.productPricingSummary[item].price}</del></span>
                                    <span className="padding-five" style={{ color: "green" }}><b>{compareSummary.productPricingSummary[item].totalDiscount}% off</b></span>
                                </div>
                            </div>
                        )
                    })
                }
                {compareSummary && selectedProduct.length !== 4 ?
                    <Compare compareSummary={compareSummary} /> : ''}
            </div>
            <table>
                <tbody>
                    {selectedProduct.length && featuresList.map((item) => {
                        return (
                            <React.Fragment>
                                <tr className="th-mainhead font-Bold" key={item.title}>
                                    <td key={item.title}>{item.title}</td>
                                </tr>
                                {item.features && item.features.map((feature) => {

                                    if (isChecked) {
                                        let tempArr = []
                                        for (let i = 0; i < selectedProduct.length; i++) {
                                            tempArr.push(feature.values[selectedProduct[i]])
                                        }
                                        let newArr = [...new Set(tempArr)]
                                        if (newArr.length > 1) {
                                            return (
                                                <tr key={feature.featureName}>
                                                    <td className="font-Bold" key={feature.featureName}>{feature.featureName}</td>
                                                    {selectedProduct.map((summary) => {
                                                        return <td>{feature.values[summary]}</td>
                                                    })}
                                                </tr>
                                            )
                                        }
                                    } else {
                                        return (
                                            <tr key={feature.featureName}>
                                                <tr className="font-Bold" key={feature.featureName}>{feature.featureName}</tr>
                                                {selectedProduct.map((summary) => {
                                                    return <td key={summary}>{feature.values[summary]}</td>
                                                })}
                                            </tr>
                                        )
                                    }

                                })}
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        selects: state.selects,
        products: state.products

    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkboxClick: (payload) => dispatch(checkboxClick(payload)),
        deleteData: (payload) => dispatch(deleteData(payload))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table)
