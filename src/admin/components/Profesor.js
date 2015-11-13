import React from 'react';
import {State, History} from 'react-router';
import { Menu, Mixins, Styles, RaisedButton, TextField, SelectField } from 'material-ui';
import Content from '../../components/layout/Content';
import ContentHeader from '../../components/layout/ContentHeader';


class Profesor extends React.Component {
  render() {
    var profesori = [
      { payload: '1', text: 'Never' },
      { payload: '2', text: 'Every Night' },
      { payload: '3', text: 'Weeknights' },
      { payload: '4', text: 'Weekends' },
      { payload: '5', text: 'Weekly' },
    ];
    var menu = [{name:'Uredi', link:'profesori/edit'},{name:'Brisi', link:'profesori/remove'}];
    return (
    <Content>
      <ContentHeader title='Odredjen profesor' menu={menu}/>
      <form style={{margin: '0 auto', position: 'relative', width: 600}}>
      <TextField hintText="Ime" disabled={true} floatingLabelText="Ime" style={{display: 'block', width: 350, margin: '0 auto'}}/>
      <TextField hintText="Prezime" disabled={true} floatingLabelText="Prezime" style={{display: 'block', width: 350, margin: '0 auto'}} />
      <TextField hintText="Email" disabled={true} floatingLabelText="Email" style={{display: 'block', width: 350, margin: '0 auto'}} />
      <TextField hintText="Sifra" disabled={true} floatingLabelText="Sifra" style={{display: 'block', width: 350, margin: '0 auto'}} />
      <TextField hintText="Skype" disabled={true} floatingLabelText="Skype" style={{display: 'block', width: 350, margin: '0 auto'}} />
      <SelectField
        floatingLabelText="Profesor"
        hintText="Odaberite profesora"
        style={{display: 'block', width: 350, margin: '0 auto'}}
        menuItems={profesori} />

        <SelectField
          floatingLabelText="Kurs"
          hintText="Odaberite profesora"
          style={{display: 'block', width: 350, margin: '0 auto'}}
          menuItems={profesori} />
      </form>
    </Content>
    );
  }
}

export default Profesor;
