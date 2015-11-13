import React from 'react';
import {State, History} from 'react-router';
import { Menu, Mixins, Styles } from 'material-ui';
import Content from '../../components/layout/Content';
import ContentHeader from '../../components/layout/ContentHeader';
import Tabela from '../../components/Tabela';

class ProgramiLista extends React.Component {
  render() {
    var menu = [{name:'Dodaj Program', link:'profesor/program/add'}];
    return (
    <Content>
      <ContentHeader title='Lista Programa' menu={menu}/>
    <Tabela/>
    </Content>
    );
  }
}

export default ProgramiLista;
