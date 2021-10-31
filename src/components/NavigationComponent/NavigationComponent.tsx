import { Button, Menu } from 'antd';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { expandMenuIcon, NAVIGATION_HEADER_ICON } from "../../utils/imageMapping";
import { NAVIGATION_BUTTONS_TEXT } from "../../utils/globalTypes";
import "./NavigationComponent.css";
import React from 'react';
import BadgeComponent from '../BadgeComponent/BadgeComponent';
import { getCartsData }from "../../features/allAppSelector";

function NavigationComponent() {
  // const dispatch = useAppDispatch();
  let history = useHistory();

  function checkStoreData(pathname: any) {
    let dataToStore: any = {};
    // switch (pathname) {
    //   case '/':
    //   case 'dashboard':
    //     dataToStore = selectedPanelData;
    //     break;
    //   case '/result':
    //     dataToStore = selectedResultData;
    //     break;
    // }
    return dataToStore
  }

  function homeClicked() {
    history.replace(location.pathname, { "storeData": checkStoreData(location.pathname) });
  }

  function cartClicked() {
    history.replace(location.pathname, { "storeData": checkStoreData(location.pathname) });
  }

  // function showTour() {
  //   // dispatch(setTourStatus(true));
  // }

  const location: any = useLocation();
  const cartsData = useAppSelector(getCartsData);

  return (
    <Menu mode="horizontal" triggerSubMenuAction={"click"} overflowedIndicator={expandMenuIcon} selectable={false}>
      <Menu.Item><Link to="/" onClick={homeClicked}><Button size={"large"} icon={NAVIGATION_HEADER_ICON[0]} className={`${location.pathname === "/" ? "selectedButton" : ''} homeNavigationButton`} shape={"round"} ghost={false} key={"home"}>{NAVIGATION_BUTTONS_TEXT[0]}</Button></Link></Menu.Item>
      {/* <Menu.Item ><Button shape={"round"} size={"large"} ghost={false} icon={NAVIGATION_HEADER_ICON[1]} onClick={showTour} key={"startTour"}>{NAVIGATION_BUTTONS_TEXT[1]}</Button></Menu.Item> */}
      <Menu.Item><Link to="/cart" onClick={cartClicked}><BadgeComponent showZeroValue={true} className={"buttonCartHeader"} text={cartsData && cartsData.length ? cartsData.length : 0}><Button size={"large"} icon={NAVIGATION_HEADER_ICON[2]} className={`${location.pathname === "/cart" ? "selectedButton" : ''} cartNavigationButton`} shape={"round"} ghost={false} key={"cart"}>{NAVIGATION_BUTTONS_TEXT[2]}</Button></BadgeComponent></Link></Menu.Item>
    </Menu>
  )
}

function propsAreEqual(prevProps: any, nextProps: any) {
  let returnFlag = true;
  return returnFlag
}

export default React.memo(NavigationComponent, propsAreEqual);