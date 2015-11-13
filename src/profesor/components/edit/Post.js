import React from 'react';
import {DragSource} from 'react-dnd';
import ItemTypes from './itemTypes';

const postSource = {
  beginDrag(props) {
    console.log('begin dragging note', props);
    return {id: props.index, post: props.post};
  }
};

@DragSource(ItemTypes.POST, postSource, (connect) => ({
  connectDragSource: connect.dragSource()
}))
class Post extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { connectDragSource} = this.props;
      return  connectDragSource(
        <div key={this.props.index}>
        <p>{this.props.post.naziv}</p>
        <p>{this.props.post.opis}</p>
        </div>
      );
    }
  }


export default Post;
