import React from 'react';
import {State, History, Link} from 'react-router';
const style = {
  width: '100%',
  padding: '0px'
};
class Table extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    data: React.PropTypes.object
  };

  render () {
      return (
        <table className={this.props.className} style={style}>
          {this.props.children}
        </table>
      );
    }
}
export default Table;
