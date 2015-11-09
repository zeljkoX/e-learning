import React from 'react';
import {State, History} from 'react-router';
import { Menu, Mixins, Styles, AppBar } from 'material-ui';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title='ucenjenjemackog'
          zDepth={0}
          style={{position: 'absolute', top: 0}}/>
          {this.props.children}
      </div>
    );
  }
}

export default MainPage;
