import React from 'react' 
import axios from '../../config/axios'
import CustomerForm from './Form'

class CustomerNew extends React.Component {
    constructor(){
        super() 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        // console.log('contact new component')
        axios.post('http://localhost:3050/api/customers', formData)
        .then(() => this.props.history.push('/customers'))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <h2> Add Contact </h2>
                <CustomerForm handleSubmit={this.handleSubmit} /> 
            </div>
        )
    }
}

export default CustomerNew