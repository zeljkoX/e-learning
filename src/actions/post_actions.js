import alt from '../alt';

class PostActions {
  newPost(post) {
    this.dispatch(post);
  }


}

export default alt.createActions(PostActions);
