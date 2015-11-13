import React from 'react';
import {State, History} from 'react-router';
import { Menu, Mixins, Styles, TextField, RaisedButton, SelectField } from 'material-ui';
import Content from '../../components/layout/Content';
import ContentHeader from '../../components/layout/ContentHeader';


class StudentAdd extends React.Component {
    displayName: "React-breadcrumbs";
  render() {
    var profesori = [
      { payload: '1', text: 'Never' },
      { payload: '2', text: 'Every Night' },
      { payload: '3', text: 'Weeknights' },
      { payload: '4', text: 'Weekends' },
      { payload: '5', text: 'Weekly' },
    ];
    return (
    <Content>
      <ContentHeader title='Dodavanje studenta'/>
      <form style={{margin: '0 auto', position: 'relative', width: 600, textAlign: 'center'}}>
      <TextField hintText="Ime" floatingLabelText="Ime" style={{display: 'block', width: 350, margin: '0 auto'}}/>
      <TextField hintText="Prezime" floatingLabelText="Prezime" style={{display: 'block', width: 350, margin: '0 auto'}} />
      <TextField hintText="Email" floatingLabelText="Email" style={{display: 'block', width: 350, margin: '0 auto'}} />
      <TextField hintText="Sifra" floatingLabelText="Sifra" style={{display: 'block', width: 350, margin: '0 auto'}} />
      <TextField hintText="Skype" floatingLabelText="Skype" style={{display: 'block', width: 350, margin: '0 auto'}} />
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

      <RaisedButton label="Odustani" primary={true} style={{marginRight: 4}} /><RaisedButton label="Sacuvaj" primary={true} />
      </form>
    </Content>
    );
  }
}

export default StudentAdd;
