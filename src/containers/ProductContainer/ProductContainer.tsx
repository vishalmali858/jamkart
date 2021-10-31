import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllProductsData } from "../../features/allAppSelector";
import { asyncLoadProducts } from "../../features/products/productsSlice";
import { modifyCartData } from "../../features/cart/cartSlice";
import { checkIfProductAlreadyAddedInCart } from "../../utils/globalHelper";
import ProductComponent from "../../components/ProductComponent/ProductComponent";

function ProductContainer() {
    const dispatch = useAppDispatch();
    const productsData = useAppSelector(getAllProductsData);

    useEffect(function () {
        !productsData.length && dispatch(asyncLoadProducts());
    });

    const [productCount, setProductIdCount] = useState([]);

    function returnUpdatedProductCountFromPorductCountButtonAndAddToCartButton(pCount: any, pId: any) {
        let updatedProductCount: any = [...productCount];
        let productCurrentUId = checkIfProductAlreadyAddedInCart(updatedProductCount, pId);
        if (productCurrentUId === -1) {
            updatedProductCount.push({
                pId,
                pCount
            });
            productCurrentUId = updatedProductCount.length - 1;
        } else {
            updatedProductCount[productCurrentUId] = {
                ...updatedProductCount[productCurrentUId],
                pCount
            }
        }
        return { updatedProductCount, productCurrentUId }
    }

    function onChangeOfCountButton(countValueUpdated: any, pId: any) {
        setProductIdCount(returnUpdatedProductCountFromPorductCountButtonAndAddToCartButton(countValueUpdated, pId).updatedProductCount);
    }

    function addToCartClick(event: any, pId: any) {
        let productCurrentUIdIfPresent = checkIfProductAlreadyAddedInCart(productCount, pId);
        let dataToSentInCart = {};
        if (productCurrentUIdIfPresent === -1) {
            const { updatedProductCount, productCurrentUId } = returnUpdatedProductCountFromPorductCountButtonAndAddToCartButton(1, pId);
            setProductIdCount(updatedProductCount);
            dataToSentInCart = updatedProductCount[productCurrentUId];
        } else {
            dataToSentInCart = productCount[productCurrentUIdIfPresent];
        }
        dispatch(modifyCartData(dataToSentInCart));
    }

    const productContainerAction = [onChangeOfCountButton, addToCartClick];

    return <div className="productContainer">
        <ProductComponent from={"productContainer"} productsData={productsData} buttonToBeRender={"Add To Cart"} actionsOnProducts={productContainerAction} />
    </div>
}

export default ProductContainer