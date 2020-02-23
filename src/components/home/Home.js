import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props)
    
        this.state = {
            product: []
        }
        
    }
    
    getAll(){
        axios    
             .get('http://localhost:8006/product')
             .then(response => {
                 console.log(response)
             })
             .catch(error => {
                 console.log(error)
             })
    }
    
    componentDidMount(){
 console.log('did mount')
        this.getAll();
    }
    componentWillMount(){
     //    console.log('did mount')
     // this.getAllBook();
    }
    render(){
        return(
            <div>
                <h4>Home</h4>
            </div>
        )
    }
}

export default Home