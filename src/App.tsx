import './App.css';
import 'antd/dist/antd.css';
import { LoaderContextProvider } from './components/SpinnerComponent/LoaderContext';
import MainContainer from './containers/MainContainer';
import WebSocketSetUpForLiveUpdate from './components/WebsocketCommunication';;

function App() {
  return (
    <div className="App">
      <LoaderContextProvider>
        <WebSocketSetUpForLiveUpdate>
          <MainContainer />
        </WebSocketSetUpForLiveUpdate>
      </LoaderContextProvider>
    </div>
  );
}

export default App;