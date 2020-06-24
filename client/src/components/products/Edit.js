import React from 'react' 
import axios from '../../config/axios'
import ProductForm from './Form'

class ProductEdit extends React.Component {
    constructor(props) {
        console.log('constructor - edit', props)
        super(props)
        this.state = {
            product: {},
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        console.log('component did mount - edit')
        const { id } = this.props.match.params
        axios.get(`http://localhost:3050/api/products/${id}`)
            .then(response => {
                this.setState(() => ({ product: response.data }))
            })
    }

    handleSubmit(formData) {
        // console.log('contact new component')
        axios.put(`http://localhost:3050/api/products/${this.state.product._id}`, formData)
            .then(() => this.props.history.push(`/products/${this.state.product._id}`))
            .catch(err => console.log(err))
    }

    render() {
       console.log('render - edit', this.state)
        return (
            <div>
                <h2>Edit Contact</h2>
                <ProductForm 
                    product={this.state.product} 
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default ProductEdit