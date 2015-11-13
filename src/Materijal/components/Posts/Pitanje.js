import React from 'react';
import ReactDOM from'react-dom';
import {Paper} from 'material-ui';
import PostSkeleton from './PostSkeleton';



class Pitanje extends React.Component {
  constructor(props) {
    super(props);
  }
render() {
  return (
      <PostSkeleton >
        <div class="pitanje">
          Pitanje: fsdfgfsdg sfdgsdfgsdfg?
          Odgovor: <input type="text" value="Odgovor dfsfsdfsdf"/>
        </div>
      </PostSkeleton>
      )}
    };

export default Pitanje;
