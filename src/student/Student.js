import React from 'react';
import ReactDOM from'react-dom';
import Post from './components/Post';
import PostStore from './stores/PostStore';
import PostActions from './actions/PostActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = PostStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  checkScroll(){
    let node = ReactDOM.findDOMNode(document.body);
    if(node.scrollHeight + node.scrollTop !== node.clientHeight){
      node.scrollTop = node.scrollHeight
    }
  }
  componentDidMount() {
    PostStore.listen(this.onChange);
    this.checkScroll();
  }

  componentWillUnmount() {
    PostStore.unlisten(this.onChange);
  }

  componentDidUpdate() {
    this.checkScroll();
  }
  onChange(state) {
    this.setState(state);
  }

  render() {
    console.log(this.state.postovi);
    var postovi = this.state.postovi.map((post,i)=>{
      return (
        <Post key={i} type={post.type} title={post.title} sadrzaj={post.sadrzaj}/>
        )
    })
    return (
      <div className='student'>
      <button onClick={this.handleNewPost}>
      Novi post
      </button>
        {postovi}

      </div>
    );
  }


  handleNewPost() {
    PostActions.newPost({type:'pitanje', sadrzaj:'Novi Post sadrzaj', title:'Novi post'});
  }
}

export default App;
