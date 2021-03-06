import React from 'react';
import ReactDOM from'react-dom';
import Header from '../components/layout/Header';
import PageWithNav from '../components/layout/PageWithNav';
import Content from '../components/layout/Content';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class Admin extends React.Component {
    displayName: "React-breadcrumbs";
render() {
  let menuItems = [
    { route: '/studenti', text: 'Studenti'},
    { route: '/profesori', text: 'Profesori'},
    { route: '/kursevi', text: 'Kursevi'},
    { route: '/gradivo', text: 'Gradivo'}
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

export default Admin;
