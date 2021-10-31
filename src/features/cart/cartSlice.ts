import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkIfProductAlreadyAddedInCart } from "../../utils/globalHelper";

export interface cartState {
  cartData: any;
}

const initialState: cartState = {
  cartData: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    modifyCartData: (state, action: PayloadAction<any>) => {
      const uniquePId = checkIfProductAlreadyAddedInCart(state.cartData, action.payload.pId);
      if (uniquePId !== -1) {
        state.cartData[uniquePId] = {
          ...action.payload
        }
      } else {
        state.cartData.push(action.payload);
      }
    },
    removeCartData: (state, action: PayloadAction<any>) => {
      const uniquePId = checkIfProductAlreadyAddedInCart(state.cartData, action.payload.pId);
      state.cartData.splice(uniquePId, 1);
    },
    resetCartData: (state) => {
      state.cartData = [];
    }
  }
});


export const { modifyCartData, removeCartData, resetCartData } = cartSlice.actions;

export default cartSlice.reducer;