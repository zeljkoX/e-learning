import React from 'react';
import ReactDOM from'react-dom';
import MainPage from '../components/MainPage';
import PageWithNav from '../components/PageWithNav';
import Content from '../components/Content';

class Admin extends React.Component {
render() {
  let menuItems = [
    { route: '/studenti', text: 'Studenti'},
    { route: '/profesori', text: 'Profesori'},
    { route: '/kursevi', text: 'Kursevi'},
    { route: '/gradivo', text: 'Gradivo'}
  ];
  return (
      <MainPage>
        <PageWithNav menuItems={menuItems}>
            {this.props.children}
        </PageWithNav>
      </MainPage>
  )
}
}

export default Admin;
