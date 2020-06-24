import React from 'react' 
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class CustomerShow extends React.Component {
   constructor(props) {
    super(props)
    this.state = {
        customer: {}
    }
    this.handleDelete = this.handleDelete.bind(this)
   }

   handleDelete(){
        const confirmDelete = window.confirm("Are you sure?")
        if(confirmDelete) {
            // api call to delete
            axios.delete(`http://localhost:3050/api/customers/${this.state.customer._id}`)
                .then(() => this.props.history.push('/customers'))
                .catch(err => window.alert(err))
        }
   }

   componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`http://localhost:3050/api/customers/${id}`)
            .then(response => this.setState(() => ({ customer: response.data })))
   }
   
   render(){
       return (
           <div>
                <h2>{this.state.customer.name}</h2>
                <p> Email - { this.state.customer.email } </p>
                <p> Mobile - {this.state.customer.mobile}</p>

                <Link to={`/customers/edit/${this.state.customer._id}`}> edit </Link>
                
                <button onClick={this.handleDelete}>
                 delete
                </button> 
                <Link to="/customers"> back </Link>
           </div>
       )
   }
}

export default CustomerShow