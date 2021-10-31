import { useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import BadgeComponent from "../BadgeComponent/BadgeComponent";
import SpaceComponent from "../SpaceComponent/SpaceComponent";
import LabelComponent from "../LabelComponent";
import { INC_DEC_COUNTER_ICON } from "../../utils/imageMapping";

interface Iprops {
    minCount: number;
    maxCount: number;
    uniqueId: any;
    onChangeOfOC: Function;
    currentCount: number;
}

function OrderCountComponent(props: Iprops) {
    const { minCount, maxCount, onChangeOfOC, uniqueId, currentCount } = props;
    const [countValue, setCountValue] = useState(currentCount);

    function onIncClick() {
        setCountValue(countValue + 1);
        onChangeOfOC(countValue + 1, uniqueId);
    }

    function onDecClick() {
        setCountValue(countValue - 1);
        onChangeOfOC(countValue - 1, uniqueId);
    }

    return <SpaceComponent direction={"vertical"}><LabelComponent fontSizeValue={"14px"}>{"Quantity"}</LabelComponent>
        <SpaceComponent size={0}>
            <ButtonComponent sizeValue={"large"} iconToRender={INC_DEC_COUNTER_ICON[countValue === minCount ? "disabledminusSymbol" : "minusSymbol"]} disabledValue={countValue === minCount} onClickFunction={onDecClick}></ButtonComponent>
            <ButtonComponent className={"productCountButton"} sizeValue={"large"} disabledValue={true}><BadgeComponent className={"productCount"} text={countValue} /></ButtonComponent>
            <ButtonComponent sizeValue={"large"} iconToRender={INC_DEC_COUNTER_ICON[countValue === maxCount ? "disabledplusSymbol" : "plusSymbol"]} disabledValue={countValue === maxCount} onClickFunction={onIncClick}></ButtonComponent>
        </SpaceComponent></SpaceComponent>
}

export default OrderCountComponent