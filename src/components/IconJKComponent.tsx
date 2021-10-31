import { Image } from 'antd';
import LabelComponent from '../components/LabelComponent';
import SpaceComponent from "./SpaceComponent/SpaceComponent";
import { JamkartIcon } from "../utils/imageMapping";

function IconJKComponent() {
    return (<SpaceComponent>
        <LabelComponent headingLevel={3} fontSizeValue={"1.4rem"}>Jam </LabelComponent>
        <Image className={"logoHeader"} width={80} height={75} src={JamkartIcon} preview={false} />
        <LabelComponent headingLevel={3} fontSizeValue={"1.4rem"}> Kart</LabelComponent>
    </SpaceComponent>);
}

export default IconJKComponent