import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { productId, productName, productCode, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
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
            <h6>Item No. {productCode}</h6>
          </div>
        </div>
      </div>
      <div className='col-md-2 text-left'>
        <h6>Price: ${price}</h6>
      </div>
      <div className="col-md-3">
        <div className="countHandler">
          <button onClick={() => removeFromCart(productId)}> - </button>
          <input value={cartItems[productId]} onChange={(e) => updateCartItemCount(Number(e.target.value), productId)} />
          <button onClick={() => addToCart(productId)}> + </button>
        </div>
      </div>
      <br></br>
    </div>
  );
};
