import React from 'react';
import ReactDOM from'react-dom';
import {TextField, List, ListItem, Checkbox} from 'material-ui';

class Programi extends React.Component {
render() {

  return (
    <div>
      <List>
                   <ListItem
                   rightIcon={<Checkbox style={{marginLeft:'-40px', position:'absolute'}}/>}
                     primaryText="Notifications"
                     secondaryText="Allow notifications" />
                   <ListItem
                     rightIcon={<Checkbox />}
                     primaryText="Sounds"
                     secondaryText="Hangouts message" />
                   <ListItem
                     rightIcon={<Checkbox />}
                     primaryText="Video sounds"
                     secondaryText="Hangouts video call" />
        </List>
        </div>
      )}
    };

export default Programi;
