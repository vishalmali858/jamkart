import FormComponent from "../FormComponent/FormComponent";
import FormItemComponent from "../FormItemComponent/FormItemComponent";
import LabelComponent from "../LabelComponent";
import SpaceComponent from "../SpaceComponent/SpaceComponent";
import { Button, Divider, Input, InputNumber } from "antd";
import { addressPageIcons } from "../../utils/imageMapping";
import React from "react";

interface Iprops {
  onAddressFilled: Function;
}

function AddressInfoComponent(props: Iprops) {
  const { onAddressFilled } = props;
  const formArrayItems = [
    {
      label: "Full Name",
      name: "Full Name",
      uniquekey: "username",
      rules: [{ required: true, message: 'Please input your first name and last name !' }],
      children: <Input size={"large"} placeholder={"First Name and Last Name"} />
    },
    {
      label: "Mobile number",
      name: "Mobile number",
      uniquekey: "mobileNumber",
      rules: [{ required: true, message: 'Please input your mobile number!' },
      { type: 'string', len: 10, message: 'Please add 10 digits mobile number' }
      ],
      children: <InputNumber size={"large"} stringMode={true} maxLength={10} placeholder={"10 digit mobile number without prefixes"} />
    },
    {
      label: "PIN code",
      name: "PIN code",
      uniquekey: "pinCode",
      rules: [{ required: true, message: 'Please input your PIN Code!' },
      { type: 'string', len: 6, message: 'Please add 6 digits PIN Code' }
      ],
      children: <InputNumber size={"large"} stringMode={true} maxLength={6} placeholder={"6 digits PIN code"} />
    },
    {
      label: "Flat, House no., Building, Company, Apartment",
      name: "Address Line 1",
      uniquekey: "addressLine1",
      rules: [{ required: true, message: 'Please input your Flat, House no., Building, Company, Apartment!' }],
      children: <Input size={"large"} placeholder={"Address Line 1"} />
    },
    {
      label: "Area, Colony, Street, Sector, Village",
      name: "Address Line 2",
      uniquekey: "addressLine2",
      rules: [{ required: true, message: 'Please input your Area, Colony, Street, Sector, Village !' }],
      children: <Input size={"large"} placeholder={"Address Line 2"} />
    },
    {
      label: "State / Province / Region",
      name: "State",
      uniquekey: "ustate",
      rules: [{ required: true, message: 'Please input your state!' }],
      children: <Input size={"large"} placeholder={"State"} />
    },
    {
      label: "Country",
      name: "Country",
      uniquekey: "country",
      rules: [{ required: true, message: 'Please input your country!' }],
      children: <Input size={"large"} placeholder={"Country"} />
    },
    {
      uniquekey: "OnNextPage",
      name: "Save Button",
      children: <Button size={"large"} icon={addressPageIcons[1]} htmlType={"submit"}>{"Proceed to Payment"}</Button>
    }
  ]

  function onAddressParentComponent(formData: any) {
    onAddressFilled(formData);
  }

  return (<SpaceComponent direction={"vertical"}>
    <LabelComponent fontSizeValue={"20px"}>Address Details</LabelComponent>
    <Divider>{addressPageIcons[0]}</Divider>
    <FormComponent formName={"address_fill_form"} onFormSubmitHandler={onAddressParentComponent}>
      {
        formArrayItems.map(function (formData: any, idx: any) {
          return <React.Fragment key={`address_fill_form_ ${idx}`}><FormItemComponent formData={formData} /></React.Fragment>
        })
      }
    </FormComponent>
  </SpaceComponent>);
}

export default AddressInfoComponent;