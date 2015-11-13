import React from 'react';
import ReactDOM from'react-dom';
import {Paper} from 'material-ui';
import PostSkeleton from './PostSkeleton';

const style= {margin: '1em', height: 200, overflow: 'scroll'};

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'dfgdg'
    };
  }
render() {
  return (
      <PostSkeleton>
      <div>
      sdff fgdfgdfg dfgdfgdfg dfgdfgd dfgdfgd dfgdfgdf dfgdf dfgdfg 
      </div>
      </PostSkeleton>
      )}
    };

export default Text;
