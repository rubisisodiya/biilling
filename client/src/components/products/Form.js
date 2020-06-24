import React from 'react' 

class ProductForm extends React.Component {
    constructor(props) {
        console.log('constructor form', props)
        super(props) 
        this.state = {
            name: '', 
            price: ''
            
        }
        // bind methods, sets the context of the this keyword
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    // es6 arrow function
    handleNameChange = (e) => {
        const name = e.target.value 
        // console.log(this) 
        this.setState(() => ({ name }))
    }

    // es6 function - bind in constructor
    handlePriceChange(e) {
        const price = e.target.value 
        // console.log(this)
        this.setState(() => ({ price }))
    }

    

    
    componentWillReceiveProps(nextProps) {
        console.log('component will receive props - form', nextProps)
        const { name, price } = nextProps.product
        this.setState(() => ({
            name, 
            price
            
        }))
    }

    handleSubmit(e) {
        e.preventDefault() 
        const formData = {
            name: this.state.name, 
            price: this.state.price
           
        }
        this.props.handleSubmit(formData)

        // clear form 

        this.setState(() => ({ 
            name: '', price: ''
        }))
      
    }

    render() {
        //console.log('render - form', this.state )
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name 
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} /> 
                    </label> <br/> 

                    <label>
                        Price
                        <input type="text" value={this.state.price} onChange={this.handlePriceChange} />
                    </label> <br /> 

                    

                    <input type="submit" /> 
                </form> 
            </div>
        )
    }
}

export default ProductForm