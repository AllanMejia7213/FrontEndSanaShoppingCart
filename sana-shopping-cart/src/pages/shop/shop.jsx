import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h4>Sana test</h4>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <hr></hr>
          <div className="row">
            <div className='col-md-1'></div>
            <div className='col-10 col-md-10 col-lg-10'>
              <br></br>
              <div className="products">
                {PRODUCTS.map((product) => (
                  <Product key={product.productId} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
