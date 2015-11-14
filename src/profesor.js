require("babel/polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route , IndexRoute, Redirect} from 'react-router';
import createHistory from 'history/lib/createHashHistory';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import FullScreenPage from './components/layout/FullScreenPage';
import ProfesorPage from './profesor/Profesor';
import StudentiLista from './profesor/components/StudentiLista';
import ProgramiLista from './profesor/components/ProgramiLista';
import ProgramAdd from './profesor/components/ProgramAdd';
import ProgramEdit from './profesor/components/ProgramEdit';

const routes = (
  <Router history={createHistory({queryKey: false})}>
  <Route path="/" component={ProfesorPage}>
  <IndexRoute component={StudentiLista} />
    <Route path="studenti" component={StudentiLista}/>
    <Route path="programi" component={ProgramiLista}/>
    <Route path="program/add" component={ProgramAdd}/>
    <Redirect from="program/:id" to="/programedit/:id"/>
  </Route>
  <Route path="programedit" component={FullScreenPage}>
    <Route path="*" component={ProgramEdit}/>
  </Route>
  </Router>
);


ReactDOM.render(routes, document.getElementById('root'));
