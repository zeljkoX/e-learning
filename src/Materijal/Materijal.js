import React from 'react';
import ReactDOM from'react-dom';
import FullScreenPage from '../components/layout/FullScreenPage';
import MainView from './components/MainView';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class Materijal extends React.Component {
render() {

  return (
      <FullScreenPage>
        <MainView/>
      </FullScreenPage>
  )
}
}

export default Materijal;
