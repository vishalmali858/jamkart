export const loadState = () => {
    try {
        let serializedState: any = sessionStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        serializedState = JSON.parse(serializedState);
        return { ...serializedState };
    } catch (error) {
        return undefined;
    }
};

export const resetState = () => {
    try {
        sessionStorage.removeItem('state');
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state: any) => {
    const { cart, checkout, products } = state;
    const { productsData } = products;
    const { cartData } = cart;
    const { checkoutShippingData } = checkout;
    try {
        const saveStateToStorage = {
            products: {
                productsData
            },
            cart: {
                cartData
            },
            checkout: {
                checkoutShippingData
            }
        }
        const serializedState = JSON.stringify(saveStateToStorage);
        sessionStorage.setItem('state', serializedState);
    } catch (error) {
        console.error(error);
    }
}