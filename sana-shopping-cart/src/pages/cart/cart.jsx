import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  var items = 0
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className='col-md-1'></div>
      <div className="col-md-7 col-lg-7 text-left">
        <h2>My shopping cart</h2>
        <br></br>
        <div className="row">
          <div className='col-12 col-md-12 col-lg-12'>
            <div className="">
              {PRODUCTS.map((product) => {
                if (cartItems[product.productId] > 0) {
                  items++
                  return <CartItem key={product.productId} data={product} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="row">
          <div className='col-md-12 text-left'>
            <h2>Shopping card detail</h2>
          </div>
        </div>
        <br></br>
        <div className='row'>
          <div className='col-md-8 text-left'>
            <p>Items </p>
            <p>Total</p>
          </div>
          <div className='col-md-4'>
            <p>{items} Units</p>
            <p>${totalAmount}</p>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className='col-md-12 text-center'>
            <button className="btn btn-primary me-2" onClick={() => navigate("/")}> Continue Shopping </button>
            <button className="btn btn-primary" onClick={() => { checkout(); navigate("/checkout"); }}>{" "} Proccces Order {" "} </button>
          </div>
        </div>
      </div>
    </div>
  );
};
