import React from 'react';
import ReactDOM from'react-dom';
import {Card, CardHeader, CardText, Paper} from 'material-ui';

const style= {padding: '1em'};

class Posts extends React.Component {
render() {

  return (
    <div>
    <Paper zDepth={2} style={style}>
    <Card initiallyExpanded={true} >
      <CardHeader
        title="Title"
        subtitle="Subtitle"
        actAsExpander={true}>
      </CardHeader>
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      </Card>
      </Paper>
      <Paper zDepth={2} style={style}>
      <Card initiallyExpanded={true} style={style}>
        <CardHeader
          title="Title"
          subtitle="Subtitle"
          actAsExpander={true}>
        </CardHeader>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        </Card>
        </Paper>
        <Paper zDepth={2} style={style}>
        <Card initiallyExpanded={true} style={style}>
          <CardHeader
            title="Title"
            subtitle="Subtitle"
            actAsExpander={true}>
          </CardHeader>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          </Card>
          </Paper>
          <Paper zDepth={2} style={style}>
          <Card initiallyExpanded={true} style={style}>
            <CardHeader
              title="Title"
              subtitle="Subtitle"
              actAsExpander={true}>
            </CardHeader>
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            </Card>
            </Paper>
            <Paper zDepth={2} style={style}>
            <Card initiallyExpanded={true} style={style}>
              <CardHeader
                title="Title"
                subtitle="Subtitle"
                actAsExpander={true}>
              </CardHeader>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              </Card>
              </Paper>
              <Paper zDepth={2} style={style}>
              <Card initiallyExpanded={true} style={style}>
                <CardHeader
                  title="Title"
                  subtitle="Subtitle"
                  actAsExpander={true}>
                </CardHeader>
                <CardText expandable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                </Card>
                </Paper>
          </div>
  )
}
}

export default Posts;
