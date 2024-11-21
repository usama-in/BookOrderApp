import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import Products from "./components/shop/Products";
import { useEffect, useState } from "react";
import Notification from "./components/ui/Notification";
import {sendCartData,fetchCartData} from './store/cartfetch'

let isInitial = true;
function App() {
  // const [isInitial, setIsInitial] = useState(true)
  const uiSelector = useSelector((state) => state.ui.isCartVisible);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(()=>{

    
      dispatch(fetchCartData())
    
    
    
  },[])

  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed){

      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}

      <Header />
      {uiSelector && <Cart />}

      <Products />
    </>
  );
}

export default App;
