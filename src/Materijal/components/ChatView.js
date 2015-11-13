import React from 'react';
import ReactDOM from'react-dom';
const MoreVertIcon = require('material-ui/lib/svg-icons/content/add');
import {IconMenu, MenuItem, IconButton} from 'material-ui';
import PostList from './PostList';
import Plus from './Plus';
import TextEdit from './Posts/TextEdit'
import Text from './Posts/Text'
import PitanjeEdit from './Posts/PitanjeEdit'
import Pitanje from './Posts/Pitanje'



class ChatView extends React.Component {
render() {
  return (
    <div>
    <PostList style={{padding:'1em'}}>
    <PitanjeEdit/>
    <Pitanje/>
      <TextEdit/>
      <Text/>
    </PostList>
    <Plus/>
    </div>
      )}
    };

export default ChatView;
