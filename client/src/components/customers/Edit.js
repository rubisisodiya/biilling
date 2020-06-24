import React from 'react' 
import axios from '../../config/axios'
import CustomerForm from './Form'

class CustomerEdit extends React.Component {
    constructor(props) {
        console.log('constructor - edit', props)
        super(props)
        this.state = {
            customer: {},
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        console.log('component did mount - edit')
        const { id } = this.props.match.params
        axios.get(`http://localhost:3050/api/customers/${id}`)
            .then(response => {
                this.setState(() => ({ customer: response.data }))
            })
    }

    handleSubmit(formData) {
        // console.log('contact new component')
        axios.put(`http://localhost:3050/api/customers/${this.state.customer._id}`, formData)
            .then(() => this.props.history.push(`/customers/${this.state.customer._id}`))
            .catch(err => console.log(err))
    }

    render() {
       console.log('render - edit', this.state)
        return (
            <div>
                <h2>Edit Contact</h2>
                <CustomerForm 
                    customer={this.state.customer} 
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default CustomerEdit