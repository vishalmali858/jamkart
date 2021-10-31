import FormComponent from "../FormComponent/FormComponent";
import FormItemComponent from "../FormItemComponent/FormItemComponent";
import LabelComponent from "../LabelComponent";
import { Button, Divider, InputNumber, Select } from "antd";
import { monthDropdown, yearDropdown } from "../../utils/globalHelper";
import { creditCardPageIcons } from "../../utils/imageMapping";
import "./CreditCardInfoComponent.css";
import React from "react";

interface Iprops {
  onConfirmOrderClicked: Function;
}

function CreditCardInfoComponent(props: Iprops) {
  const { onConfirmOrderClicked } = props;
  const formArrayItems = [
    {
      label: "Card Number",
      name: "Card Number",
      uniqueKey: "cardNumber",
      rules: [
        { required: true, message: 'Please input your card number!' },
        { type: 'string', len: 12, message: 'Please add 12 digits card number' },
      ],
      children: <InputNumber size={"large"} stringMode={true} maxLength={12} placeholder={"Card Number"} />
    },
    {
      label: "Expiration Month",
      name: "Expiration Month",
      uniqueKey: "expirationMonth",
      rules: [{ required: true, message: 'Please select your card expiry month!' }],
      children: <Select allowClear={true}
        showSearch={true} options={monthDropdown} placeholder={"Card Expiry Month"} />
    },
    {
      label: "Expiration Year",
      name: "Expiration Year",
      uniqueKey: "expirationYear",
      rules: [{ required: true, message: 'Please input your card expiry year !' }],
      children: <Select allowClear={true}
        showSearch={true} options={yearDropdown} placeholder={"Card Expiry Year"} />
    },
    {
      label: "Card CVV",
      name: "Card CVV",
      uniqueKey: "cardCVV",
      rules: [{ required: true, message: 'Please input your card CVV' },
      { type: 'string', len: 3, message: 'Please add 3 digits card number' }],
      children: <InputNumber size={"large"} stringMode={true} maxLength={3} placeholder={"Card CVV"} />
    },
    {
      children: <Button size={"large"} icon={creditCardPageIcons[1]} htmlType={"submit"}>{"Confirm Order"}</Button>
    }
  ];

  function onConfirmOrderClickParentComponent(formData: any) {
    onConfirmOrderClicked(formData);
  }

  return (<>
    <LabelComponent fontSizeValue={"20px"}>Card Details</LabelComponent>
    <Divider>{creditCardPageIcons[0]}</Divider>
    <FormComponent formName={"credit_card_info"} onFormSubmitHandler={onConfirmOrderClickParentComponent}>
      {
        formArrayItems && formArrayItems.map(function (formData: any, formIdx: any) {
          return <React.Fragment key={`credit_card_info_${formIdx}`}><FormItemComponent formData={formData} /></React.Fragment>
        })
      }
    </FormComponent></>);
}

export default CreditCardInfoComponent;