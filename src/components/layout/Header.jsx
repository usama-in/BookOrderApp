import React from 'react'
import CartButton from '../cart/CartButton'
import classes from './header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
    <h1>ReduxCart</h1>
    <nav>
      <ul>
        <li>
          <CartButton />
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header