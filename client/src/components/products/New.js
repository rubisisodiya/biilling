import React from 'react' 
import axios from '../../config/axios'
import ProductForm from './Form'

class ProductNew extends React.Component {
    constructor(){
        super() 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        // console.log('contact new component')
        axios.post('http://localhost:3050/api/products', formData)
        .then(() => this.props.history.push('/products'))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <h2> Add Product </h2>
                <ProductForm handleSubmit={this.handleSubmit} /> 
            </div>
        )
    }
}

export default ProductNew