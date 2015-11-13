import React from 'react';
import {State, History, Link} from 'react-router';
import { Menu, Mixins, Styles, FlatButton } from 'material-ui';


class ContentHeader extends React.Component {
  renderMenu(){
    return this.props.menu.map((item,i) => {
      return (
        <Link key={i} to={item.link}><FlatButton label={item.name} /></Link>
      )
    });
  }
  render() {
    var menu = this.props.menu ? this.renderMenu(): null;
    return (
     <div style={{height:'2em'}}>
        <h2 style={{display:'inline-block', fontSize: '1.5em'}}>{this.props.title}</h2>
        <span style={{float: 'right', display: 'inline-block'}}>
          {menu}
        </span>
     </div>
    );
  }
}

export default ContentHeader;
