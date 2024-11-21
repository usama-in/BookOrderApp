import React from 'react'
import Card from '../ui/Card'
import classes from './productitem.module.css';
import {useDispatch} from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  const dispatch= useDispatch()
    const{title , price , description ,id} =props;
    

    const handleAddToCart=()=>{
        dispatch(cartActions.addItemToCart({itemId:id,name:title,price:price}))
        
    }
  return (
    <li className={classes.item}>
    <Card>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>PKR {price}</div>
      </header>
      <p>{description}</p>
      <div className={classes.actions}>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </Card>
  </li>
  )
}

export default ProductItem