import React from "react";
import classes from "./cartitem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <span className={classes.itemprice}>
          PKR{total}(PKR{price}/item)
        </span>
      </header>
      <div className={classes.detail}>
        <div className={classes.quantity}>x{quantity}</div>
        <div className={classes.actions}>
          <button onClick={() => dispatch(cartActions.removeItemFromCart(id))}>
            -
          </button>
          <button
            onClick={() =>
              dispatch(
                cartActions.addItemToCart({
                  name: title,
                  itemId: id,
                  price: price,
                })
              )
            }
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
