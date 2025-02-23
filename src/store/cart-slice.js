import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 ,changed:false},
  reducers: {
    replaceCart(state,action){
      state.items=action.payload.items;
      state.totalQuantity=action.payload.totalQuantity
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.changed=true
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.itemId
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          itemId: newItem.itemId,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++,
          (existingItem.totalPrice = existingItem.totalPrice + newItem.price);
      }
    },
    removeItemFromCart(state, action) {
      const deletedItemId = action.payload;
      state.changed=true
      const existingItem = state.items.find(
        (item) => item.itemId == deletedItemId
      );
      console.log({ ...existingItem });

      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item !== existingItem);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});



export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
