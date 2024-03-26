import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { productId, productName, description, productCode, price, stock } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[productId];

  return (
    <div className="product">
      <div className="row">
        <div className="col-md-2">
          <img src="https://neetwork.com/wp-content/uploads/2019/02/mx3.png" className="card-img-top h-50 w-50" alt="..." ></img>
        </div>
        <div className="col-md-5 text-left">
          <div className='row'>
            <div className='col-md-12'>
              <h4>{productName}</h4>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h6>Item No. {productCode} | <b style={{ color: 'green' } }> {stock} in stock </b></h6>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h6>{description}</h6>
            </div>
          </div>
        </div>
        <div className='col-md-2 text-left'>
          <h6>Price: ${price}</h6>
        </div>
        <div className='col-md-2'>
          <button id={`quantity${productId}`} className="addToCartBttn" onClick={() => addToCart(productId)}> Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>} </button>
        </div>
      </div>
      <br></br>
    </div>
  );
};