import React from 'react';
import { Router, Route , IndexRoute, Redirect} from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import Admin from './admin/Admin';
import Studenti from './admin/components/Studenti';
import Student from './admin/components/Student';
import StudentAdd from './admin/components/StudentAdd';
import AdminProfesori from './admin/components/Profesori';
import AdminProfesor from './admin/components/Profesor';
import AdminProfesorAdd from './admin/components/ProfesorAdd';
import Predavanje from './components/layout/FullScreenPage';
import MainPageWithNav from './components/MainPageWithNav';
import Materijal from './Materijal/Materijal';


import FullScreenPage from './components/layout/FullScreenPage';
import ProfesorPage from './profesor/Profesor';
import StudentiLista from './profesor/components/StudentiLista';
import ProgramiLista from './profesor/components/ProgramiLista';
import ProgramAdd from './profesor/components/ProgramAdd';
import ProgramEdit from './profesor/components/ProgramEdit';


const routes = (
  <Router history={createHistory({queryKey: false})}>
  <Route path="course" component={Predavanje}/>

  <Route path="studenti" name="Studenti" component={MainPageWithNav}>
    <IndexRoute component={Studenti} />
    <Route path="add" name="Add" component={StudentAdd}/>
    <Route path="studenti/:id/remove" name="Remove" component={Student}/>
    <Route path="studenti/:id/edit/" name="Edit" component={Student}/>
    <Route path=":id" name="Studenti" component={Student}/>
  </Route>

  <Route path="profesori" name="Profesori" component={MainPageWithNav}>
    <IndexRoute component={AdminProfesori} />
    <Route path="add" component={AdminProfesorAdd}/>
    <Route path="remove/:id" component={AdminProfesor}/>
    <Route path="edit/:id" component={AdminProfesor}/>
    <Route path=":id" component={AdminProfesor}/>
  </Route>

  <Route path="kurs" component={MainPageWithNav}>
    <IndexRoute component={Studenti} />
    <Route path="add" component={StudentAdd}/>
    <Route path="remove/:id" component={Student}/>
    <Route path="edit/:id" component={Student}/>
    <Route path=":id" component={Student}/>
  </Route>


  <Route path="program" component={MainPageWithNav}>
    <IndexRoute component={Studenti} />
    <Route path="add" component={StudentAdd}/>
    <Route path="remove/:id" component={Student}/>
    <Route path="edit/:id" component={Student}/>
    <Route path=":id" component={Student}/>
  </Route>

  <Route path="materijal" component={Materijal}>
  </Route>


  <Route path="profesor" component={ProfesorPage}>
  <IndexRoute component={StudentiLista} />
    <Route path="studenti" component={StudentiLista}/>
    <Route path="programi" component={ProgramiLista}/>
    <Route path="program/add" component={ProgramAdd}/>
    <Redirect from="program/:id" to="/programedit/:id"/>
  </Route>

  <Route path="programedit" component={FullScreenPage}>
    <Route path="*" component={ProgramEdit}/>
  </Route>

  <Redirect from='/' to='programedit/1'/>

  </Router>
);

export default routes;
