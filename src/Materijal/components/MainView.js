import React from 'react';
import ReactDOM from'react-dom';
import {Paper, Tabs, Tab, Card, CardHeader, CardText} from 'material-ui';
import SplitPane from 'react-split-pane';
import Posts from './Posts';
import Search from './Search';
import Programi from './Programi';
import Termini from './Termini';
import ChatView from './ChatView';

var css = {
  paddingTop: '4em',
  display:'block',
  height: '100%',
  width: '100%'
}
class MainView extends React.Component {
  render() {
    return (
        <div style={css}>
        <SplitPane split="vertical" minSize="50%" defaultSize="50%">
                  <div>
                  <Tabs>
                      <Tab label="Program" style={{backgroundColor: 'rgb(0, 104, 154)', height:'100%'}}>
                          <Posts/>
                      </Tab>
                      <Tab label="Pretraga" style={{backgroundColor: 'rgb(0, 104, 154)'}}>
                        <Search/>
                      </Tab>
                      <Tab label="Svi programi" style={{backgroundColor: 'rgb(0, 104, 154)'}}>
                        <Programi/>
                      </Tab>
                      <Tab label="Termini" style={{backgroundColor: 'rgb(0, 104, 154)'}}>
                        <Termini/>
                      </Tab>
                    </Tabs>
                  </div>
                <div>
                <ChatView/>
                </div>
              </SplitPane>
      </div>
    )
  }
}

export default MainView;
