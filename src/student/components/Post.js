import React from 'react';
import Pitanje from './postovi/pitanje';
import Definicija from './postovi/definicija';
import Popuni from './postovi/popuni';


class Post extends React.Component {
constructor(props) {
    super(props);
  }

  render() {
    var post;
    if(this.props.type == 'definicija'){
      return <Definicija {...this.props}/>
    }
    else {
      return <Pitanje {...this.props}/>
    }

  }
}

export default Post;
