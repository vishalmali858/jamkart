import { Typography } from 'antd'
import { FONT_COLOR_FOR_LABEL_COMPONENT } from '../utils/globalTypes';
const { Title } = Typography;

interface Iprops {
  headingLevel?: any;
  children?: any;
  color?: any;
  fontSizeValue?: any;
  backgroundValue?: string;
}

function LabelComponent(props: Iprops) {
  const { headingLevel, children, fontSizeValue = "2.6 rem", color = FONT_COLOR_FOR_LABEL_COMPONENT } = props;
  return (<div className="labelComponent">
    <Title style={{ fontSize: fontSizeValue, color: color }} level={headingLevel}>{children}</Title>
  </div>);
}

export default LabelComponent