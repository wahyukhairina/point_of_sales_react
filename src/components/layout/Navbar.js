import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark" style={{
              backgroundColor: '#DB7093	'
            }}>
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
                <Link class="nav-item nav-link" to="/book">Books</Link>
                <Link class="nav-item nav-link" to="/about">About</Link>
                <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </div>
            </div>
          </nav>
        )
    }
}

export default Navbar;