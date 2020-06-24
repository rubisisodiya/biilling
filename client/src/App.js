import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from './components/layout/Home'
 import CustomerList from './components/customers/List'
 import CustomerNew from './components/customers/New'
 import CustomerShow from './components/customers/Show'
 import CustomerEdit from './components/customers/Edit'

 import ProductList from './components/products/List'
 import ProductNew from './components/products/New'
 import ProductShow from './components/products/Show'
 import ProductEdit from './components/products/Edit'

import UserRegister from './components/authentication/Register'
import UserLogin from './components/authentication/Login'
import axios from './config/axios'

console.log(axios.defaults)

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {
      isAuthenticated: !!localStorage.getItem('token'),
    }
    this.handleIsAuthenticated = this.handleIsAuthenticated.bind(this)
  }

  handleIsAuthenticated(bool) {
    this.setState(() => ({
      isAuthenticated: bool
    }))
  }

  render() {
    return (
      <BrowserRouter>
        <div>

          <h2> Billing App </h2>
          <Link to="/"> Home </Link> | 
          <Link to="/customers">Customers</Link>
          <Link to="/products">Products</Link>
         
         

          {
            this.state.isAuthenticated && <Link to="/users/logout">Logout </Link>
          }

          {
            !this.state.isAuthenticated && (
              <div>
                <Link to="/users/register"> Register</Link>
                <Link to="/users/login">Login </Link>
              </div>
            )
          }
        
          <Switch> 
            <Route path="/" component={Home} exact={true} />
            <Route path="/customers" component={CustomerList} exact={true} />
            <Route path="/customers/new" component={CustomerNew} exact={true} />
            <Route path="/customers/edit/:id" component={CustomerEdit} exact={true} />
            <Route path="/customers/:id" component={CustomerShow} />

            <Route path="/products" component={ProductList} exact={true} />
            <Route path="/products/new" component={ProductNew} exact={true} />
            <Route path="/products/edit/:id" component={ProductEdit} exact={true} />
            <Route path="/products/:id" component={ProductShow} />
           

            <Route path="/users/register" component={UserRegister} />
            <Route path="/users/login" render={() => <UserLogin  handleIsAuthenticated={this.handleIsAuthenticated}/> } /> 
            <Route path="/users/logout" component={() => {
                localStorage.clear() 
                axios.defaults.headers['x-auth'] = null 
                return (
                  <div>
                    <p> You have successfully logged out</p>
                  </div>
                )
                }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
