import React from 'react';
import ReactDOM from'react-dom';
import {Paper} from 'material-ui';
import ReactQuill from 'react-quill';
import PostSkeleton from './PostSkeleton';

const style= {margin: '1em', height: '100px', overflow: 'scroll'};

class TextEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'dfgdg'
    };
  }
render() {
  return (
      <PostSkeleton edit='true'>
        <ReactQuill value={this.state.value} theme="snow"/ >
      </PostSkeleton>
      )}
    };

export default TextEdit;
