import { useAppSelector } from '../../app/hooks';
import { getOrdersArray } from "../../features/allAppSelector";
import { emptyShoppingCartOutlined } from "../../utils/imageMapping";
import { SUCCESS_MESSAGE_TEXT, FAILED_MESSAGE_TEXT, ERROR_MESSAGE_TEXT, ERROR404_TEXT, NAVIGATE_TO_DASHBOARD } from "../../utils/globalTypes";
import ResultComponent from '../../components/ResultComponent/ResultComponent';
import LabelComponent from "../../components/LabelComponent";
import { useHistory } from 'react-router-dom';
import "./ResultContainer.css";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

function ResultContainer() {
  let history = useHistory();

  function buttonClicked() {
    history.push('/');
  }

  const homeButton = <ButtonComponent onClickFunction={buttonClicked} sizeValue={"large"} >{"Home"}</ButtonComponent>
  const resultObject = {
    "pass": {
      resultTitle: SUCCESS_MESSAGE_TEXT,
      resultStatus: "success",
      resultIcon: emptyShoppingCartOutlined,
      resultSubTitle: null,
      buttonExtraProps: homeButton
    },
    "fail": {
      resultTitle: FAILED_MESSAGE_TEXT,
      resultStatus: "error",
      resultIcon: emptyShoppingCartOutlined,
      resultSubTitle: null,
      buttonExtraProps: homeButton
    },
    "error": {
      resultTitle: ERROR_MESSAGE_TEXT,
      resultStatus: "warning",
      resultIcon: null,
      resultSubTitle: NAVIGATE_TO_DASHBOARD,
      buttonExtraProps: homeButton
    },
    "errorSpam": {
      resultTitle: ERROR404_TEXT,
      resultStatus: "404",
      resultIcon: null,
      resultSubTitle: NAVIGATE_TO_DASHBOARD,
      buttonExtraProps: homeButton
    }
  }

  const ordersData = useAppSelector(getOrdersArray);
  console.log(ordersData, "ordersData");

  let resultStatusObjectValue: any = !ordersData ? resultObject.errorSpam : resultObject.error;
  if (ordersData && ordersData.length) {
    resultStatusObjectValue = resultObject.pass;
    resultStatusObjectValue.resultSubTitle = `Please keep a track of the Order Id ${ordersData[0].id}. This will help in tracking your shipment status`
  }

  const { resultTitle, resultStatus, resultIcon, resultSubTitle, buttonExtraProps } = resultStatusObjectValue;
  return (<div className="resultContainer">
    {<ResultComponent
      status={resultStatus}
      icon={resultIcon}
      title={<LabelComponent headingLevel={3}>{resultTitle}</LabelComponent>}
      subTitle={<LabelComponent headingLevel={5}>{resultSubTitle}</LabelComponent>}
      extra={buttonExtraProps}
    />}
  </div>);
}

export default ResultContainer