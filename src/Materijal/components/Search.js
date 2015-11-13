import React from 'react';
import ReactDOM from'react-dom';
import {TextField, List, ListItem, ListDivider, Colors} from 'material-ui';

class Search extends React.Component {
render() {

  return (
    <div>
    <TextField hintText="Upisite termin za pretragu" style={{margin:'0px auto', textAlign: 'center', display:'block'}}/>

    <List>
        <ListItem
          primaryText="Brendan Lim"
          secondaryText={
            <p>
              <span>Brunch this weekend?</span><br/>
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2} />
        <ListDivider inset={true} />
        <ListItem
          primaryText="me, Scott, Jennifer"
          secondaryText={
            <p>
              <span>Summer BBQ</span><br/>
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
          secondaryTextLines={2} />
        <ListDivider inset={true} />
        <ListItem
          primaryText="Grace Ng"
          secondaryText={
            <p>
              <span>Oui oui</span><br/>
              Do you have any Paris recs? Have you ever been?
            </p>
          }
          secondaryTextLines={2} />
        <ListDivider inset={true} />
        <ListItem
          primaryText="Kerem Suer"
          secondaryText={
            <p>
              <span>Birthday gift</span><br/>
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2} />
        <ListDivider inset={true} />
        <ListItem
          primaryText="Raquel Parrado"
          secondaryText={
            <p>
              <span>Recipe to try</span><br/>
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2} />
</List>
  </div>
  )
}
}

export default Search;
