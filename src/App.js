import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Product from './tes/Product';
import Login from './components/auth/Login';
import EditProduct from './components/product/EditProduct.js'
import Chart from './components/product/Chart'

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/chart" component={Chart} />
      <Route path="/edit-product/:productId" component={EditProduct} />
     <Route exact path="/" component={Home} />
     {/* <Route exact path="/" component={Product} /> */}
    </Router>
  )
}

export default App;