import React from 'react' 
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class ProductList extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3050/api/products')
            .then(response => this.setState(() => ({ products: response.data })))
    }
    render() {
        return (
            <div>
                {
                    this.state.products.length === 0 ? (<p> No products found. Add your first Product</p>) : (
                        <div> 
                            <h2>Listing Products - {this.state.products.length} </h2>
                            <ul>
                                {
                                    this.state.products.map(product => {
                                        return (
                                            <li key={product._id}> <Link to={`/products/${product._id}`}>{product.name} </Link> </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ) 
                }

                <Link to="/products/new">Add Product</Link>

            </div>
        )
    }
}

export default ProductList