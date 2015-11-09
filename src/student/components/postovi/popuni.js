import React from 'react';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import Card from 'material-ui/lib/card/card';
import Avatar from 'material-ui/lib/avatar';
import FlatButton from 'material-ui/lib/flat-button';



class Popuni extends React.Component {
constructor(props) {
    super(props);
  }

  render() {
    return (
     <Card initiallyExpanded={true} style={{
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

export default Popuni;
