import React from 'react';
import Kat from './Kat';

class Kategorije extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    let handler  = this.props.handler;
    let kategorije = this.props.kategorije.map((item, i)=> {
      return (
        <Kat kategorija={item} key={i} index={i} handler={handler}/>
      );
    });

    return (
      <div>
      {kategorije}
      </div>
    );
  }
}

export default Kategorije;
