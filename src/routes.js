import React from 'react';
import { Router, Route , IndexRoute, Redirect} from 'react-router';
import createHistory from 'history/lib/createHashHistory';



import Admin from './admin/Admin';
import Studenti from './admin/components/Studenti';


const routes = (
  <Router history={createHistory({queryKey: false})}>
  <Route path="/" component={Admin}>
    <IndexRoute component={Studenti} />
  </Route>
  </Router>
);

export default routes;
