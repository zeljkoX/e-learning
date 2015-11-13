import React from 'react';

class Kat extends React.Component {
  constructor(props){
    super(props);
    this.onClick= this.onClick.bind(this);
  }

  render() {
      return (
        <div key={this.props.index} onClick={this.onClick}>
        <p>{this.props.kategorija.naziv}</p>
        <p>{this.props.kategorija.opis}</p>
        </div>
      );
    }
    onClick(){
      this.props.handler(this.props.index);
    }
  }


export default Kat;
