import React from 'react';
import ReactDOM from'react-dom';
import {Paper} from 'material-ui';

class PostList extends React.Component {
render() {
  return (
    <div style={{height:'90%'}}>

      {this.props.children}

    </div>
      )}
    };

export default PostList;
