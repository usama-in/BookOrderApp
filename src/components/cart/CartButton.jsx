import React from 'react'
import classes from './cartbutton.module.css'
import {useDispatch , useSelector} from 'react-redux'
import { uiActions } from '../../store/ui-slice'

const CartButton = () => {
  const dispatch=useDispatch()
  const selector= useSelector(state => state.cart.totalQuantity)
  return (
    <button className={classes.button}  onClick={()=> dispatch(uiActions.toggleCart())}>
        <span>My Cart</span>
        <span className={classes.badge}>{selector}</span>
    </button>
  )
}

export default CartButton