import React from 'react';
import {State, Link} from 'react-router';
const style = {
  textAlign: 'left',
  fontWeight: 'bold',
  marginBottom: '10px'
};

class TableHeader extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    data: React.PropTypes.array
  };

  static defaultProps = {
    className: '',
    data: []
  };

  state = {
    data: ['Prva kolona', 'Druga kolona', 'Treca kolona']
  };

  render () {
      return (
        <thead data-react-table='head' className={this.props.className} style={style}>
          <tr>
            {
            (this.state.data).map((item, key) => {
              return ( <th key={key}>{item}</th> );
            })
          }
          </tr>
        </thead>
      );
    }
}
export default TableHeader;
