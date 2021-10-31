import { Button } from 'antd';

interface Iprops {
  children?: any;
  className?: string;
  shape?: any;
  disabledValue?: boolean;
  onClickFunction?: Function;
  uniqueKey?: string;
  iconToRender?: any;
  sizeValue?: any;
  loadingValue?: boolean;
}

function ButtonComponent(props: Iprops) {
  const { children = null, sizeValue = "large", loadingValue = false, className = '', disabledValue = false, iconToRender = null, uniqueKey = '', onClickFunction } = props;
  return (
    <Button
      className={className}
      key={uniqueKey}
      icon={iconToRender}
      size={sizeValue}
      disabled={disabledValue}
      loading={loadingValue}
      onClick={(event: any) => {
        onClickFunction && onClickFunction(event)
      }}
    >
      {children}
    </Button>);
}

export default ButtonComponent;