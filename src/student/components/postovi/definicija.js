import React from 'react';
import {CardHeader, CardText, CardActions, Card, Avatar, FlatButton} from 'material-ui';

class Definicija extends React.Component {
constructor(props) {
    super(props);
  }
  render() {
    return (
     <Card initiallyExpanded={true}  style={{
    width: '70%',
    margin: '10 auto'
  }}>
  <CardHeader
    title={this.props.title}
    subtitle="Subtitle"
    avatar={<Avatar style={{color:'red'}}>A</Avatar>}
    actAsExpander={true}
    showExpandableButton={true}>
  </CardHeader>
  <CardText expandable={true}>
    {this.props.sadrzaj}
  </CardText>
  <CardActions expandable={true}>
    <FlatButton label="Action1"/>
    <FlatButton label="Action2"/>
  </CardActions>
</Card>
    );
  }
}
export default Definicija;
