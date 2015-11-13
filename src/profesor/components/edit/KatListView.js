import React from 'react';
import Kategorije from './Kategorije';
import Postovi from './Postovi';
import {KategorijeData, PostoviData} from './fakeData';

class KatListView extends React.Component {
  constructor(props){
    super(props);
    this.handlerA = this.handlerA.bind(this);
    this.handler = this.handler.bind(this);
    this.move = this.move.bind(this);
    this.state = { children: [], draft:[] };
}

  render() {
   let data = !this.state.children.length ?(<Kategorije kategorije={KategorijeData} handler={this.handler}/>):(<Postovi postovi={this.state.children}/>);
    return (
      <div>
      {data}
      <button onClick={this.handlerA}> Postovi</button>
      </div>
    );
  }
  handler(index){
      this.setState({children: KategorijeData[index].children});
  }
  handlerA(e){
    this.setState({children: []});
  }
  move(sourceIndex, targetIndex){
    console.log('move');
    //let newChildren = this.state.children.splice(sourceIndex, 1);
    //let newDraft = this.state.draft.splice(targetIndex, 0, sourceId);
  }
}

export default KatListView;
