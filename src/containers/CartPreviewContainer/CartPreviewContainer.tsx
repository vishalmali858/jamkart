import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getCartDataWithProductData } from "../../features/allAppSelector";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import SpaceComponent from "../../components/SpaceComponent/SpaceComponent";
import { useHistory } from "react-router-dom";
import { modifyCartData, removeCartData, resetCartData } from "../../features/cart/cartSlice";
import LabelComponent from "../../components/LabelComponent";
import { bigShoppingCartOutlined, emptyShoppingCartOutlined, NAVIGATION_HEADER_ICON, FOOTER_BUTTON_ICON } from "../../utils/imageMapping";
import { Divider, Empty } from "antd";

function CartPreviewContainer() {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const cartProductData = useAppSelector(getCartDataWithProductData);

    function checkoutClicked() {
        history.push("/shipping");
    }

    function onClickHome() {
        history.push("/");
    }

    function onChangeOfCountButton(countValueUpdated: any, pId: any) {
        dispatch(modifyCartData({
            pId,
            pCount: countValueUpdated
        }));
    }

    function addToRemoveClick(event: any, pId: any) {
        dispatch(removeCartData(pId));
    }

    function resetCartClicked() {
        dispatch(resetCartData());
    }

    const previewContainerAction = [onChangeOfCountButton, addToRemoveClick];

    const totalSummaryPrice = cartProductData && cartProductData.length ? cartProductData.reduce(function (prevValue: any, currentValue: any) {
        return prevValue + currentValue.totalPriceWithShipping
    }, 0) : 0;

    const totalSummary = (<>
        <Divider>{"Order Summary"}</Divider>
        <SpaceComponent alignValue={"start"} direction={"vertical"}>
            <LabelComponent fontSizeValue="20px">{`Total Products Selected - ${cartProductData.length}`}</LabelComponent>
            <LabelComponent fontSizeValue="20px">{`Total Bill - $${totalSummaryPrice}`}</LabelComponent>
        </SpaceComponent></>)

    return (<SpaceComponent direction="vertical" className={"cartPreviewContainer"}>
        <LabelComponent fontSizeValue={"20px"}>Welcome To Shopping Cart</LabelComponent>
        <Divider>{bigShoppingCartOutlined}</Divider>
        {cartProductData.length ? <>
            <ProductComponent from={"cartPreview"} actionsOnProducts={previewContainerAction} buttonToBeRender={"Remove"} productsData={cartProductData} />
            {totalSummary}
            <Divider>{bigShoppingCartOutlined}</Divider>
            <SpaceComponent className={"cartPreviewFooterButtons"}>
                <ButtonComponent iconToRender={FOOTER_BUTTON_ICON[0].iconToRender} onClickFunction={checkoutClicked}>Proceed To Check Out</ButtonComponent>
                <ButtonComponent iconToRender={FOOTER_BUTTON_ICON[1].iconToRender} onClickFunction={resetCartClicked}>Reset Cart</ButtonComponent>
            </SpaceComponent></>
            : <SpaceComponent direction="vertical">
                <Empty image={emptyShoppingCartOutlined} description={<SpaceComponent direction={"vertical"}>
                    <LabelComponent fontSizeValue={"30px"}>{"Your Cart Is Empty."}</LabelComponent>
                    <LabelComponent fontSizeValue={"20px"}>{"Please add a product to cart and then come back"}</LabelComponent>
                </SpaceComponent>
                }
                ></Empty>
                <Divider>{bigShoppingCartOutlined}</Divider>
                <ButtonComponent iconToRender={NAVIGATION_HEADER_ICON[0]} onClickFunction={onClickHome}>{"Home"}</ButtonComponent></SpaceComponent>}
    </SpaceComponent>)
}

export default CartPreviewContainer