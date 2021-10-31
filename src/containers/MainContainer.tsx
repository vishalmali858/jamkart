import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import ProductContainer from "../containers/ProductContainer/ProductContainer";
import CartPreviewContainer from './CartPreviewContainer/CartPreviewContainer';
import ProductShippingContainer from "./ProductShippingContainer/ProductShippingContainer";
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import ResultComponent from "../components/ResultComponent/ResultComponent";
import { LoaderStatusService } from "../components/SpinnerComponent/LoaderStatusService";
import SpinnerComponent from "../components/SpinnerComponent/SpinnerComponent";
import { SPINNER_WHILE_SENDING_SHIPPING_DATA, SPINNER_ICON } from "../utils/imageMapping";
import { FINDING_FALCONE_SPINNER_TIP_VALUE } from "../utils/globalTypes";
import { ScrollToTop } from './ScrollTop';
import ResultContainer from './ResultContainer/ResultContainer';

const { Header, Footer, Content } = Layout;
function MainContainer() {
  const { loading } = LoaderStatusService();
  return (
    <SpinnerComponent
      iconToRender={SPINNER_ICON[SPINNER_WHILE_SENDING_SHIPPING_DATA]}
      spinningValue={loading} tipValue={FINDING_FALCONE_SPINNER_TIP_VALUE}>
      <div className="appMainContainer">
        <Router>
          <Layout>
            <Header>
              <Route component={HeaderComponent} />
            </Header>
            <Content>
              <ScrollToTop />
              <Switch>
                <Route exact={true} path={'/'} component={ProductContainer} />
                <Route exact={true} path={'/cart'} component={CartPreviewContainer} />
                <Route exact={true} path={'/shipping'} component={ProductShippingContainer} />
                <Route exact={true} path={'/result'} component={ResultContainer} />
                <Route component={ResultComponent} />
              </Switch>
            </Content>
            <Footer>
              <Route component={FooterComponent} />
            </Footer>
          </Layout>
        </Router>
      </div>
    </SpinnerComponent>
  )
}

export default MainContainer;