import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { sendShippingData } from './checkoutAPI';
export interface checkoutState {
  checkoutShippingData: any;
  checkoutCardData: any;
  ordersArray: any;
}

const initialState: checkoutState = {
  checkoutShippingData: {},
  checkoutCardData: {},
  ordersArray: []
};

export const asyncSendShippingData = createAsyncThunk(
  'checkout/sendShippingData',
  async (dataObjToSend: any) => {
    try {
      const response = await sendShippingData(dataObjToSend);
      return response;
    } catch (error) {
      return error
    }
  }
);

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setAddressData: (state, action: PayloadAction<any>) => {
      state.checkoutShippingData = action.payload;
    },
    setCardData: (state, action: PayloadAction<any>) => {
      state.checkoutCardData = action.payload;
    },
    resetCheckoutCardData: (state) => {
      state.checkoutCardData = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncSendShippingData.fulfilled, (state, action: any) => {
        if(!state.ordersArray) {
          state.ordersArray = [];
        }
        action.payload && state.ordersArray.push({
          ...action.payload
        });
      })
  }
});


export const { setAddressData, setCardData, resetCheckoutCardData } = checkoutSlice.actions;

export default checkoutSlice.reducer;