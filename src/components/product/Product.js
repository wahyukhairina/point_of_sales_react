import React, { Component } from 'react'
import ProductItem from './ProductItem'
import axios from 'axios'

class Product extends Component {
    state = {
        ArrProducts: []
        
    }

    readProduct() {
        axios
            .get('http://localhost:8006/product')
            .then(response => {
                //    console.log(result.data.result)
                this.setState({ ArrProducts: response.data.result }) // Maping Dulu ke State!
            })
            .catch(console.log)
    }

    componentDidMount() {
        
        this.readProduct()
    }

    render() {
        console.log(this.state.ArrProducts.result)
        const showProduct = this.state.ArrProducts.map((item, index) => { // Maping Untuk Tampil Kan Semua Product!
            
            return (
                <ProductItem product={item} key={index} />
            )
        })

        return (
            <div className="row">
                <div className="col-8">
                    {showProduct}
                </div>
            </div>
        )
    }
}

export default Product