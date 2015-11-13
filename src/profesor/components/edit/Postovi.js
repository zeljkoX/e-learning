import React from 'react';
import Post from './Post';
import ItemTypes  from './itemTypes';
import { DropTarget } from 'react-dnd';

const PostoviTarget = {

  drop(props, monitor) {
    console.log(props);
    console.log(monitor.getItem());
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}
@DropTarget(ItemTypes.POST, PostoviTarget, collect)
class Postovi extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const {connectDropTarget} = this.props;
    let postovi = this.props.postovi.map((item, i)=> {
      return (
        <Post post={item} index={i}  key={i} handler={this.props.handler}/>
      );
    });

    return connectDropTarget(
      <div>
      {postovi}
      </div>
    );
  }

}

export default Postovi;
