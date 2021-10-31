import { RootState } from '../app/store';
import { checkIfProductAlreadyAddedInCart } from '../utils/globalHelper';

export const getAllProductsData = (state: RootState) => state.products.productsData;

export const getCartsData = (state: RootState) => state.cart.cartData;

export const getCartDataWithProductData = (state: RootState) => {
    const pData = getAllProductsData(state);
    const cData = getCartsData(state);
    return cData.map(function (cartData: any) {
        const pUId = checkIfProductAlreadyAddedInCart(pData, cartData.pId, "id");
        return {
            ...pData[pUId],
            ...cartData,
            totalPrice: Number((pData[pUId].price * cartData.pCount).toFixed(2)),
            totalPriceWithShipping: Number((Number((pData[pUId].price * cartData.pCount).toFixed(2)) + pData[pUId].shippingPrice).toFixed())
        };
    });
}

export const getCurrentShippingData = (state: RootState) => state.checkout.checkoutShippingData;

export const getOrdersArray = (state: RootState) => state.checkout.ordersArray;

