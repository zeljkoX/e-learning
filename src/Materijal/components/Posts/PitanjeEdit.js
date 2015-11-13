import React from 'react';
import ReactDOM from'react-dom';
import {Paper} from 'material-ui';
import PostSkeleton from './PostSkeleton';



class PitanjeEdit extends React.Component {
  constructor(props) {
    super(props);
  }
render() {
  return (
      <PostSkeleton >
        <div class="pitanje">
          Pitanje: <input type="text"/>
          Odgovor: <input type="text"/>
        </div>
      </PostSkeleton>
      )}
    };

export default PitanjeEdit;
