import React from 'react';
import {State, History} from 'react-router';
import { Menu, Mixins, Styles } from 'material-ui';
import Content from '../../components/Content';
import ContentHeader from '../../components/ContentHeader';
import Tabela from '../../components/Tabela';

class Studenti extends React.Component {
  render() {
    var menu = [{name:'Dodaj Studenta', link:'dodaj'},{name:'Brisi Studenta', link:'brisi'}];
    return (
    <Content>
      <ContentHeader title='Naziv stranice' menu={menu}/>
        <Tabela/>
    </Content>
    );
  }
}

export default Studenti;
