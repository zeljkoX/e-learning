import React from 'react';
import ReactDOM from'react-dom';
import {IconMenu, IconButton} from 'material-ui';
const MenuItem = require('material-ui/lib/menus/menu-item');

const MoreVertIcon = require('material-ui/lib/svg-icons/content/add');
let iconButtonElement = <IconButton><MoreVertIcon /></IconButton>;

class PostList extends React.Component {
render() {
  return (
    <div style={{margin: '0px auto', width: '2em'}}>
    <IconMenu iconButtonElement={iconButtonElement} openDirection="top-right">
    <MenuItem primaryText="Tekst" />
    <MenuItem primaryText="Tabela" />
    <MenuItem primaryText="Pitanje" />
    <MenuItem primaryText="Video" />
  </IconMenu>
    </div>
      )}
    };

export default PostList;
