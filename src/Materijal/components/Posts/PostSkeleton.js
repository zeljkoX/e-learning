import React from 'react';
import ReactDOM from'react-dom';
import {Paper, TextField, RaisedButton} from 'material-ui';


const style= {margin: '1em', height: 200, boxSizing:'border-box'};

class PostSkeleton extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  return (
    <Paper zDepth={2} style={style}>
      <div id='post-header'>
        Naziv Posta: <input type='text' placeholder="Naziv Posta"/>
            <button>Definicija</button> <button>Pasiv</button>
        <div id='controls' style={{float:'right'}}>
        x []
        </div>
      </div>
      {this.props.children}
    </Paper>
      )}
    };

export default PostSkeleton;
