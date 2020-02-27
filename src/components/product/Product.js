import React, { Component } from 'react'
import ProductItem from './ProductItem'
import axios from 'axios'
import Navbar from '../layout/Navbar'
import ProductCart from './ProductCart.js'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
        cart: null,
      ArrProducts: [],
        product_name:'',
        desc: '',
        photo: '',
        price: '',
        category: '',
        stock: '',
        data_added:new Date(),
        data_updated:new Date()

  }
  }
    
modalAdd = () => {
    this.setState({
        add: true,
       
    })
}

addClose = () => {
    this.setState({
        add: false,
       
    })
}

modalDelete = () => {
    this.setState({
        del: true,
       
    })
}


deleteClose = () => {
    this.setState({
       del: false,
    })
}

onChange = (e) => {
    // console.log(f.target.value);
    this.setState({
        [e.target.name]: e.target.value
    })
}

onChangePhoto = (event) =>{
    this.setState({
        photo: event.target.files[0]
    })
}
onSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state)


    const data = new FormData();
        data.append( "product_name",this.state.product_name);
        data.append("desc", this.state.desc);
        data.append("photo",this.state.photo);
        data.append("price",this.state.price);
        data.append("category",this.state.category);
        data.append("stock",this.state.stock);
        
        data.append("data_added", new Date());
        data.append("data_updated", new Date());
    

    axios
        .post('http://localhost:8006/product/', data)
        .then(response => {
            // console.log(response)
            this.componentDidMount()
        })
        .catch(err => {
            console.log(err)
        })
    }


  onChangeSearch = (event) => {
    //  console.log(event.target.value)
     this.setState({
         searchName: event.target.value
     })
     const authorization = localStorage.getItem('token');
     const userId = localStorage.getItem("user-id");
     axios.get(`http://localhost:8006/product/?searchName=${event.target.value}`, {
        headers: {
          "authorization": authorization,
          "user-id": userId
        }
      })
    //  console.log(event)
    .then((response) => {
              
        this.setState({ ArrProducts: response.data.result }) 
      })
      .catch(err => {
        console.log(err)
      })
    }

    deleteButton = (e) => {
       
        axios
          .delete(`http://localhost:8006/product/${e}`)
          .then(response => {
            // console.log(response)
            this.componentDidMount()
          })
          .catch(error => {
            console.log(error)
          })
        
      }
     
      editHandler = product => {
          this.setState({
              product_id: product.product_id,
              name: product.name,
              desc: product.desc,
              catergory: product.category,
              price: product.price,
              stock: product.stock,
              productIdSelected: product.id,
              forStatus: "Edit"

          })
      }
    
    getAll() {
        const authorization = localStorage.getItem('token');
         const userId = localStorage.getItem("user-id");
        axios.get('http://localhost:8006/product', {
            headers: {
              "authorization": authorization,
              "user-id": userId
            }
          })
          .then((response) => {
              
            this.setState({ ArrProducts: response.data.result }) 
          })
          .catch(err => {
            console.log(err)
          })
        }

    
    componentDidMount() {
    this.getAll()
    }

    onSetCart = (item) => {
        this.setState({
            cart: item
        })
    }


    render() {
        const { ArrProducts, cart } = this.state;
        const listProduct = ArrProducts.map((product) => {
            return(
                <ProductItem key={product.id} item={product} setCart={this.onSetCart}
                deleteButton = {this.deleteButton} editHandler = {this.editHandler} />
            )
        })
        return (
            <div className="row">
                <div className="col-md-9">
                    <Navbar actionSearch={this.onChangeSearch} />
                   
                <div className="row">
                    <div className="col-md-1">
                   
                        <div style={{marginLeft:"20px", marginTop:"20px", cursor: "pointer"}} className="fa fa-plus fa-2x" data-toggle="modal" data-target="#modaladd"></div>
                        <div
          className="modal fade"
          id="modaladd"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  ADD PRODUCT
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form encType="multipart/form-data" >
              <div className="form-body">
                        <div className="form-group">
                            
                            <label for="exampleInputEmail1">Product Name</label>
                            <input type="text" className="form-control" name="product_name"  onChange={this.onChange}  aria-describedby="emailHelp" placeholder="Input Product Name Here!"/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input type="text" className="form-control" name="desc" onChange={this.onChange}  id="exampleInputPassword1" placeholder="Input Product Description Here!"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Image</label>
                            <input type="file" className="form-control" name="photo" onChange={this.onChangePhoto}  id="exampleInputPassword1" placeholder="Input Image Here!"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Price</label>
                            <input type="text" className="form-control" name="price" onChange={this.onChange}  id="exampleInputPassword1" placeholder="Input Price Here!"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Category</label>
                            <input type="text" className="form-control" name="category" onChange={this.onChange}  id="exampleInputPassword1" placeholder="Insert Category Here!"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Stock</label>
                            <input type="text" className="form-control" name="stock" onChange={this.onChange}  id="exampleInputPassword1" placeholder="Insert Stock Here!"/>
                        </div>
                        <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.onSubmit}>Submit</button>
                        </div>
                        </form>
                        </div>
              <div className="modal-footer">
                
              </div>
            </div>
          </div>
        </div>
                <a className="fa fa-bar-chart fa-2x" style={{marginLeft:"20px", marginTop:"20px", cursor: "pointer", color: "black"}} href='/chart'></a>


                    </div>
                    <div className="col-md-11">
                    <div className= "row">
                    {listProduct}
                    </div>
                {/* Product */}
                {/* <div className ="row" id="row_posts">
                    {this.state.ArrProducts.map((product) => (
                    <div className="col-md-4" id="col-posts" key={product.id}>
                        <div className="card"  style={{marginTop: '10px'}} id="card_posts"><div class="card-header">{product.name}</div>
                            <img className="rounded mx-auto d-block" style={{marginTop:"3px"}} src={product.image} />
                    <div className="card-body">
                         <h5 className="card-title">{product.price}</h5>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="fa fa-shopping-cart fa-2x" onClick={this.modalDelete}></div>
                            </div>
                            <div className="col-md-4">
                            <div className="fa fa-pencil-square-o fa-2x"></div>
                            </div> 
                            <div className="col-md-4">
                            <div className="fa fa-trash-o fa-2x" onClick={this.modalDelete}></div>
                                
                                <Modal show={this.state.del} onHide={this.deleteClose} animation={false}>
                        <Modal.Header>
                                <Modal.Title>Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure want to delete thsis product?</p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.deleteClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" data-dismiss="modal" onClick={() => this.deleteButton(product.id)}>
                           Yes
                        </Button>
                        </Modal.Footer>
                        </Modal>
                            </div> 
                        </div>
                    </div>
                        </div>
                </div>
             ) )}
              </div> */}

              {/* PAGINATION */}
              <nav aria-label="Page navigation example">
             <ul style={{marginTop : '5px'}} class="pagination justify-content-end">
                <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#">Next</a>
            </li>
        </ul>
        </nav>
                </div>
            </div>
            </div>

            {/* CHART */}
            <div className="col-md-3">
            <ProductCart cart={this.state.cart} />
            </div>
                
              
        </div>
        )

    }
}

export default Product