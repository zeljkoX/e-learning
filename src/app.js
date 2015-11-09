import React from 'react';
import ReactDOM from 'react-dom';
import { AppCanvas, MainNav, AppBar, FlatButton } from 'material-ui';
import {Link} from 'react-router';


class Main extends React.Component {
render(){
  let style = {
    'paddingTop': '4em',
    'width': '100%',
    'height': '100%'
  }
  return (
    <div id="main" style={style}>
    {this.props.children}
    </div>
  );
}

}
class App extends React.Component {

  render() {
    let style = {
      position: 'fixed'
    }
    return (
      <div>
      <AppBar title="Učenje njemačkog"
        iconElementRight={
          <div>
          <Link to={"/admin"}><FlatButton label="Admin" /></Link>
          <Link to={"/student"}><FlatButton label="Student" /></Link>
          <Link to={"/profesor"}><FlatButton label="Profesor" /></Link>
          </div>
        } style={style}/>
      <Main>
        {this.props.children}
      </Main>
      </div>
    );
  }
}

export default App;
