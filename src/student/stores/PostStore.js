import alt from '../../alt';
import PostActions from '../actions/PostActions';

class PostStore {
  constructor() {
    this.state = {
      postovi: [{type:"definicija", title:"Blabla", sadrzaj:"LoremIpsum"},{type:"pitanje", title:"Blabla", sadrzaj:"LoremIpsum"}]
    };

    this.bindListeners({
      onNewPost: PostActions.NEW_POST,
    });
  }

  onNewPost(post) {
    this.setState({postovi: this.state.postovi.concat([post])});
  }

}

export default alt.createStore(PostStore, 'PostStore');
