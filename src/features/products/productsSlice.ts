import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsAPI';
export interface productsState {
  productsData: any;
}

const initialState: productsState = {
  productsData: [],
};

export const asyncLoadProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetchProducts();
      return response;
    } catch (error) {
      return error
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncLoadProducts.fulfilled, (state, action: any) => {
        if (action.payload.hasOwnProperty("errorCode")) {
          return
        }
        state.productsData = action.payload.products;
      })
  }
});

export default productsSlice.reducer;