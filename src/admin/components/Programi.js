import React from 'react';
import {State, History} from 'react-router';
import { Menu, Mixins, Styles } from 'material-ui';
import Content from '../../components/layout/Content';
import ContentHeader from '../../components/layout/ContentHeader';
import Tabela from '../../components/Tabela';

class Programi extends React.Component {
    displayName: "React-breadcrumbs";
  render() {
    var menu = [{name:'Dodaj Program', link:'programi/add'}];
    return (
    <Content>
      <ContentHeader title='Naziv stranice' menu={menu}/>
    <Tabela/>
    </Content>
    );
  }
}

export default Programi;
