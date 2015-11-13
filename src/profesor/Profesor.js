import React from 'react';
import ReactDOM from'react-dom';
import Header from '../components/layout/Header';
import PageWithNav from '../components/layout/PageWithNav';
import Content from '../components/layout/Content';


class Profesor extends React.Component {
render() {
  let menuItems = [
    { route: '/profesor/studenti', text: 'Studenti'},
    { route: '/profesor/programi', text: 'Programi'}
  ];
  return (
      <Header>
        <PageWithNav menuItems={menuItems}>
            {this.props.children}
        </PageWithNav>
      </Header>
  )
}
}

export default Profesor;
