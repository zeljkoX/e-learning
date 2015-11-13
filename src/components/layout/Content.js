import React from 'react';
import {State, History} from 'react-router';
import { Menu, Mixins, Styles, AppBar, Paper, Toolbar, ToolbarGroup, ToolbarTitle, DropDownMenu, DropDownIcon, ToolbarSeparator, FontIcon ,RaisedButton, ClearFix, IconButton , NavigationClose, FlatButton} from 'material-ui';


class Content extends React.Component {
  render() {

    return (
        <Paper zDepth={1} style={{ paddingTop: '1em'}}>
          {this.props.children}
        </Paper>
    );
  }
}

export default Content;
