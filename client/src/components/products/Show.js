import React from 'react' 
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class ProductShow extends React.Component {
   constructor(props) {
    super(props)
    this.state = {
        product: {}
    }
    this.handleDelete = this.handleDelete.bind(this)
   }

   handleDelete(){
        const confirmDelete = window.confirm("Are you sure?")
        if(confirmDelete) {
            // api call to delete
            axios.delete(`http://localhost:3050/api/products/${this.state.product._id}`)
                .then(() => this.props.history.push('/products'))
                .catch(err => window.alert(err))
        }
   }

   componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`http://localhost:3050/api/products/${id}`)
            .then(response => this.setState(() => ({product: response.data })))
   }
   
   render(){
       return (
           <div>
                <h2>{this.state.product.name}</h2>
                <p> Price - { this.state.product.price } </p>
                

                <Link to={`/products/edit/${this.state.product._id}`}> edit </Link>
                
                <button onClick={this.handleDelete}>
                 delete
                </button> 
                <Link to="/products"> back </Link>
           </div>
       )
   }
}

export default ProductShow