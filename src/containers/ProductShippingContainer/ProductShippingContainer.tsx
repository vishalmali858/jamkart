import StepComponent from "../../components/StepComponent/StepComponent";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import LabelComponent from "../../components/LabelComponent";
import AddressInfoComponent from "../../components/AddressInfoComponent/AddressInfoComponent";
import CreditCardInfoComponent from "../../components/CreditCardInfoComponent/CreditCardInfoComponent";
import SpaceComponent from "../../components/SpaceComponent/SpaceComponent";
import { shippingIcon } from "../../utils/imageMapping";
import { Divider } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setAddressData, asyncSendShippingData } from "../../features/checkout/checkoutSlice";
import { resetCartData } from "../../features/cart/cartSlice";
import { getCurrentShippingData, getCartsData } from "../../features/allAppSelector";
import { LoaderStatusService } from "../../components/SpinnerComponent/LoaderStatusService";

function ProductShippingContainer() {
    const dispatch = useAppDispatch();
    const history = useHistory();

    const shippingAddressData = useAppSelector(getCurrentShippingData);
    const cartsData = useAppSelector(getCartsData);

    const { showLoading, hideLoading } = LoaderStatusService();
    const [currentStep, setCurrentStep] = useState(Object.keys(shippingAddressData).length === 0 ? 0 : 1);

    function onStepButtonClicked(formData: any) {
        setCurrentStep(currentStep + 1);
        let addressObj = {
            addressLine1: formData["Address Line 1"],
            addressLine2: formData["Address Line 2"],
            country: formData["Country"],
            state: formData["State"],
            fullName: formData["Full Name"],
            mobileNumber: formData["Mobile number"],
            pinCode: formData["PIN code"]
        };
        dispatch(setAddressData(addressObj));
    }

    async function onConfirmOrderClicked(formData: any) {
        let cardObj = {
            cardNumber: formData["Card Number"],
            expirationMonth: formData["Expiration Month"],
            expirationYear: formData["Expiration Year"],
            cardCVV: formData["Card CVV"],
        }
        showLoading();
        await dispatch(asyncSendShippingData({
            cartInfo: cartsData,
            shippingInfo: shippingAddressData,
            cardInfo: cardObj
        }));
        dispatch(resetCartData());
        history.push('/result');
        hideLoading();
    }

    const stepWiseShippingData = [
        {
            title: "Address",
            content: <AddressInfoComponent onAddressFilled={onStepButtonClicked} />
        },
        {
            title: "Payment",
            content: <CreditCardInfoComponent onConfirmOrderClicked={onConfirmOrderClicked} />
        }
    ];

    if (!cartsData.length) {
        history.push("/cart");
        return null
    }

    return <SpaceComponent direction={"vertical"} className="productShippingContainer">
        <LabelComponent fontSizeValue={"20px"}>Shipping Details</LabelComponent>
        <Divider>{shippingIcon}</Divider>
        <StepComponent stepDataSource={stepWiseShippingData} currentStep={currentStep} />
    </SpaceComponent>
}

export default ProductShippingContainer