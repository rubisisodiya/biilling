import React from 'react' 
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class CustomerList extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3050/api/customers')
            .then(response => this.setState(() => ({ customers: response.data })))
    }
    render() {
        return (
            <div>
                {
                    this.state.customers.length === 0 ? (<p> No customers found. Add your first Customer</p>) : (
                        <div> 
                            <h2>Listing Customers - {this.state.customers.length} </h2>
                            <ul>
                                {
                                    this.state.customers.map(customer => {
                                        return (
                                            <li key={customer._id}> <Link to={`/customers/${customer._id}`}>{customer.name} </Link> </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ) 
                }

                <Link to="/customers/new">Add Customer</Link>

            </div>
        )
    }
}

export default CustomerList