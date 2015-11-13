import React from 'react';
import {State, History, Link} from 'react-router';
const style={
};

const trStyle = {
  height: '2em'
}
class TableBody extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    data: React.PropTypes.object
  };

  static defaultProps = {
    className: '',
    data: {}
  };

  state = {
    data: [
      ['ime', 'prezime', '/studenti/56465465'],
      ['ime', 'prezime', '/profesori/6516516'],
      ['Profesor', 'Program', '/profesor/program/16516516']
    ]
  };

  render () {
      return (
        <tbody data-react-table='body' className={this.props.className} style={style}>
        {
            (this.state.data).map((item, key) => {
              return (
              <tr key={key} style={trStyle}>
                <td><Link to={item[2]}>{item[0]}  </Link></td><td>{item[1]}</td><td>{item[2]}</td>
              </tr>
              );
            })
          }
        </tbody>
      );
    }
}
export default TableBody;
