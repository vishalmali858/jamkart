import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import checkoutReducer from '../features/checkout/checkoutSlice';
import productsReducer from '../features/products/productsSlice';
import counterReducer from '../features/counter/counterSlice';
import { saveState, loadState } from '../features/sessionStorage';

const persistedState = loadState() || {};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    products: productsReducer,
  },
  preloadedState: persistedState
});

store.subscribe(() => {
  const storeData = store.getState();
  saveState(storeData);
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
