import React from 'react';
import {State, History} from 'react-router';
import { Menu, Mixins, Styles } from 'material-ui';
import Content from '../../components/layout/Content';
import ContentHeader from '../../components/layout/ContentHeader';
import Tabela from '../../components/Tabela';

class StudentiLista extends React.Component {
  render() {
    var menu = [];
    return (
    <Content>
      <ContentHeader title='Lista Studenata' menu={menu}/>
    <Tabela/>
    </Content>
    );
  }
}

export default StudentiLista;
