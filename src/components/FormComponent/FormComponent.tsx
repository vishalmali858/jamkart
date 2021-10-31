import { Form } from "antd";

interface Iprops {
  onFormSubmitHandler?: Function;
  children?: any;
  formName?: any;
}

function FormComponent(props: Iprops) {
  const [form] = Form.useForm();
  const { children, onFormSubmitHandler, formName } = props;

  function onFinish(values: any) {
    onFormSubmitHandler && onFormSubmitHandler(values);
  }

  return (<Form
    name={formName}
    form={form}
    layout="vertical"
    onFinish={onFinish}
    autoComplete="off"
    initialValues={{
      remember: true
    }}
  >
    {children}
  </Form>);
}

export default FormComponent;