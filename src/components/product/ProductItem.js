import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({item, setCart, deleteButton, editHandler}) => {

        const onAddChart = (e) => {
            e.preventDefault();
            setCart(item);
            
        }
        
    
    return(
       
        <Fragment>
                    
                    <div className="col-md-4">
                    <div className="card"  style={{marginTop: '10px'}} id="card_posts">
                        <ul class="card-header" style={{fontWeight:"bold"}} >{item.name}</ul>
                            <img className="rounded mx-auto d-block" style={{marginTop:"3px", width: 210 , height: 210 }} src={item.image} />
                    <div className="card-body">
                         <h5 className="card-title">{item.price}</h5>
                        <div className="row">
                            <div className="col-md-4">
                                <span className="fa fa-shopping-cart fa-2x" style={{ cursor: "pointer"}} onClick={ onAddChart} ></span>
                            </div>
                            <div className="col-md-4">
      
                            <Link className="fa fa-pencil-square-o fa-2x" style={{ color: "black"}}   to={`/edit-product/${item.id}`}></Link>
                            </div> 
                            <div className="col-md-4">
                            <span className="fa fa-trash-o fa-2x" data-toggle="modal" style={{ cursor: "pointer"}} data-target="#modaldelete"></span>
                            </div> 
                        </div>
                    </div>
                    <div
                      className="modal fade"
                      id="edit"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  DELETE PRODUCT
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
                <p>Are you sure want to delete this product?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button" 
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => deleteButton(item.id)}
                  
                >  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
                    {/* MODAL DELETE */}
                    <div
                      className="modal fade"
                      id="modaldelete"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  DELETE PRODUCT
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
                <p>Are you sure want to delete this product?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button" 
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => deleteButton(item.id)}
                  
                >  Yes
                </button>
              </div>
            </div>
          </div>
        </div> 
        </div>
        </div>
            </Fragment>
              
        // <Col xs={6} md={4} style={{ marginBottom: "20px", border: "1px solid rgba(0,0,0,.1)", paddingTop: "10px", paddingBottom: "10px" }}>
        //     <img src={item.image} width={200} height={150}/>
        //     <p style={{ marginTop: "10px" }}>{item.name}</p>
        //     <Row style={{ marginTop: "8px" }}>
        //         <Col sm={6}>Rp. {item.price}</Col>
        //         <Col sm={6}>
        //             <Button variant="info" size="sm" onClick={onAddChart} >Add Chart</Button>
        //         </Col>
        //     </Row>
        // </Col>
    )

                    }

export default ProductItem;