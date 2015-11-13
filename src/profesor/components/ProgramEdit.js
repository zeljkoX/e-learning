import React from 'react';
import ReactDOM from'react-dom';
import {Paper, Tabs, Tab, Card, CardHeader, CardText} from 'material-ui';
import SplitPane from 'react-split-pane';
import KatListView from './edit/KatListView';
import Postovi from './edit/Postovi';
import {KategorijeData} from './edit/fakeData';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';



var css = {
  paddingTop: '4em',
  display:'block',
  height: '100%',
  width: '100%'
}
@DragDropContext(HTML5Backend)
class MainView extends React.Component {
  render() {
    return (
        <div style={css}>
          <SplitPane split="vertical" minSize="50%" defaultSize="50%">
            <div>
              <KatListView/>
            </div>
            <div><Postovi postovi={KategorijeData[0].children}/></div>
          </SplitPane>
      </div>
    )
  }
}

export default MainView;
