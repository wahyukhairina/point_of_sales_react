import React, { Component } from 'react';
const ProductItem = ({ product }) => {
  
    return (
        <div class="row row-cols-3 row-cols-md-2">
            <div class="col mb-4">
                <div class="card">
                    <img src={product.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h1 class="card-title">{product.name}</h1>
                        <p class="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem