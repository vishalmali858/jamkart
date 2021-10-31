import { Form } from "antd";

interface Iprops {
  formData: any;
}

function FormItemComponent(props: Iprops) {
  const { formData } = props;
  const { rules, children, label, uniquekey, name } = formData;
  return (<Form.Item key={uniquekey} name={name} label={label} rules={rules}>{children}</Form.Item>);
}

export default FormItemComponent;