import React from 'react';
import ReactDOM from'react-dom';
import Header from './layout/Header';
import PageWithNav from './layout/PageWithNav';
import Breadcrumbs from 'react-breadcrumbs';

class MainPageWithNav extends React.Component {
render() {
  let menuItems = [
    { route: 'studenti', text: 'Studenti'},
    { route: 'profesori', text: 'Profesori'},
    { route: 'kursevi', text: 'Kursevi'},
    { route: 'program', text: 'Programi'}
  ];
  return (
      <Header>
        <PageWithNav menuItems={menuItems}>
            <Breadcrumbs  {...this.props}/>
            {this.props.children}
        </PageWithNav>
      </Header>
  )
}
}

export default MainPageWithNav;
