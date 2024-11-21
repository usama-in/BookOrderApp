import { cartActions } from "./cart-slice";
import  { uiActions } from "./ui-slice";

export const fetchCartData=()=>{
    return async(dispatch)=>{

        const fetchRequest =async()=>{
            const response=await fetch('https://taks-4bb52-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
            const data = await response.json();
            if (!response.ok)
            {
                throw new Error('fetch failed')
            }
            return data
        }

        try{
            const cartData=await fetchRequest();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity:cartData.totalQuantity
            }))
        }
        catch (error){
            dispatch(uiActions.showNotification(
                {
                    title: "Failed",
                    status: "error",
                    message: "Failed to fetch data", 
                }
            ))
        }

    }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          title: "Sending...",
          status: "Pending",
          message: "Sending Data to Cart",
        })
      );
      const sendRequest = async () => {
        const response = await fetch(
          "https://taks-4bb52-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({items:cart.items, totalQuantity:cart.totalQuantity}),
          }
        );
        if (!response.ok) {
          throw new Error("failed");
        }
      };
      try {
        await sendRequest();
        dispatch(
          uiActions.showNotification({
            title: "success",
            status: "success",
            message: "Sent data Successfully ",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            title: "error!",
            status: "error",
            message: "Sending Failed ",
          })
        );
      }
    };
  };