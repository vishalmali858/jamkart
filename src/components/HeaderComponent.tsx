import React from 'react';
import NavigationComponent from './NavigationComponent/NavigationComponent';
import IconJKComponent from "./IconJKComponent";

function HeaderComponent() {
  return (
    <div className="headerComponent">
      <div className="logo-header">
        <div className="navigatorIconHeader">
          <IconJKComponent />
        </div>
        <NavigationComponent />
      </div>
    </div >
  );
}

function propsAreEqual(prevProps: any, nextProps: any) {
  let returnFlag = true;
  if (prevProps.location && prevProps.location.pathname && nextProps.location && nextProps.location.pathname && prevProps.location.pathname !== nextProps.location.pathname) {
    returnFlag = false;
  }
  return returnFlag
}

export default React.memo(HeaderComponent, propsAreEqual);