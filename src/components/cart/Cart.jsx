import React from "react";
import classes from "./cart.module.css";
import CartItem from "./CartItem";
import Card from "../ui/Card";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartSelector.map((item) => (
          <CartItem
          key={item.itemId}
            item={{
             
              title: item.name,
              price: item.price,
              quantity: item.quantity,
              total: item.totalPrice,
              id: item.itemId,
            }}
          />
        ))}

       
      </ul>
    </Card>
  );
};

export default Cart;
