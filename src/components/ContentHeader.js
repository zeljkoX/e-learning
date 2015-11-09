import React from 'react';
import {State, History, Link} from 'react-router';
import { Menu, Mixins, Styles, FlatButton } from 'material-ui';


class ContentHeader extends React.Component {

  render() {
    var menu = this.props.menu.map((item,i) => {
      return (
        <Link key={i} to={item.link}><FlatButton label={item.name} /></Link>
      )
    });
    return (
     <div style={{height:'2em'}}>
        <h2 style={{display:'inline-block'}}>{this.props.title}</h2>
        <span style={{float: 'right', display: 'inline-block'}}>
          {menu}
        </span>
     </div>
    );
  }
}

export default ContentHeader;
