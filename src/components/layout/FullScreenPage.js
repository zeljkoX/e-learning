import React from 'react';
import {State, History} from 'react-router';
import { Menu, Mixins, Styles, AppBar } from 'material-ui';
import Header from './Header';

class FullScreenPage extends React.Component {
  render() {
    return (
      <Header>
        {this.props.children}
      </Header>
    );
  }
}

export default FullScreenPage;
