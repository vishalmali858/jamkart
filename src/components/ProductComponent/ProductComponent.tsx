import { Divider, Image } from "antd";
import CardComponent from "../CardComponent/CardComponent";
import { getCardDefaultGridAttribute } from "../../utils/globalTypes";
import OrderCountComponent from "../../components/OrderCountComponent/OrderCountComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import LabelComponent from "../LabelComponent";
import "./ProductComponent.css";
import SpaceComponent from "../SpaceComponent/SpaceComponent";
import { shoppingCartOutlined, deleteCartOutlined, getBadgeAndCardComp } from "../../utils/imageMapping";

interface Iprops {
    productsData: any;
    buttonToBeRender?: string;
    actionsOnProducts: any;
    from?: any;
}

function ProductComponent(props: Iprops) {
    const { productsData, actionsOnProducts, buttonToBeRender = "", from = "productContainer" } = props;

    function getPriceSummaryToShowInCart(productData: any, isLast: boolean) {
        const { totalPrice, shippingPrice, price, pCount = 1, totalPriceWithShipping } = productData;
        return <SpaceComponent direction="vertical">
            <SpaceComponent className={"summaryContainer"} direction="vertical">
                {getBadgeAndCardComp(`${pCount} * ${price}`, "Quantity * Price")}
                {getBadgeAndCardComp(`${totalPrice} `, "Product Price ($)")}
                {getBadgeAndCardComp(`${shippingPrice} `, "Shipping Price ($)")}
                {getBadgeAndCardComp(`${totalPriceWithShipping} `, "Total Price ($)")}
            </SpaceComponent>
        </SpaceComponent>
    }

    function getProductDescription(productData: any) {
        const { currency, price, description } = productData;
        return <>
            <Divider><LabelComponent color={"red"} fontSizeValue={"14px"}>{`${currency} ${price} Only`}</LabelComponent></Divider>
            <SpaceComponent>
                <LabelComponent color={"#3385d9"} fontSizeValue={"14px"}>{description}</LabelComponent>
            </SpaceComponent>
        </>
    }

    const pDataSourceData = productsData.length === 0 ? [...new Array(5)].map(() => { return { metaTitle: "", description: "" } }) : productsData.map(function (productData: any, productId: any) {
        const { id, imageUrl, name, pCount = 1 } = productData;
        return {
            metaTitle: name,
            title: from === "cartPreview" ? `Product ${productId + 1}` : "",
            description: getProductDescription(productData),
            uniqueKey: id,
            widthValue: "230",
            loadingSkeleton: false,
            extraComponentToRender: from === "cartPreview" ? getPriceSummaryToShowInCart(productData, Number(productId) === (productsData.length - 1) ? true : false) : null,
            cover: <Image width={150} height={150} src={imageUrl} />,
            actionsArray: [<OrderCountComponent currentCount={pCount} uniqueId={id} onChangeOfOC={(event: any) => actionsOnProducts[0](event, id)} maxCount={10} minCount={1} />,
            (buttonToBeRender !== '' ? <SpaceComponent direction={"vertical"} alignValue={"center"}><LabelComponent fontSizeValue={"14px"}>{buttonToBeRender}</LabelComponent><ButtonComponent sizeValue={"large"} iconToRender={from === "cartPreview" ? deleteCartOutlined : shoppingCartOutlined} onClickFunction={(event: any) => { actionsOnProducts[1](event, id) }}></ButtonComponent></SpaceComponent> : null)]
        }
    });
    function getCardValuefromComponent(fromComponentName: any) {
        let cardValueCompProps: any = {};
        switch (fromComponentName) {
            case "cartPreview":
                cardValueCompProps.listItemLayout = "vertical";
                cardValueCompProps.borderValue = true;
                break;
            default:
                cardValueCompProps.gridValues = getCardDefaultGridAttribute;
                break;
        }
        return cardValueCompProps
    }
    return <CardComponent {...getCardValuefromComponent(from)} dataSource={pDataSourceData} />
}

export default ProductComponent;