import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Alunos from '../pages/Alunos';
import StudentCompleteForm from '../pages/StudentCompleteForm';
import StudentAndAddressRegistration from '../pages/StudentAndAddressRegistration';
import StudentRegistration from '../pages/StudentRegistration';
import UpdateStudent from '../pages/UpdateStudent';
import StudentAndGuardianRegistration from '../pages/StudentAndGuardianRegistration';
import Professores from '../pages/Professores';
import Disiplinas from '../pages/Disiplinas';
import Cursos from '../pages/Cursos';
import Turmas from '../pages/Turmas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/Alunos" exact component={Alunos} isPrivate />
      <Route
        path="/Alunos/FormularioCompleto"
        component={StudentCompleteForm}
        exact
        isPrivate
      />
      <Route
        path="/Alunos/FormularioCadastro"
        component={StudentRegistration}
        exact
        isPrivate
      />
      <Route
        path="/Alunos/StudentAndAddressRegistration"
        component={StudentAndAddressRegistration}
        exact
        isPrivate
      />
      <Route
        path="/Alunos/StudentAndGuardianRegistration"
        component={StudentAndGuardianRegistration}
        exact
        isPrivate
      />
      <Route
        path="/Alunos/Update"
        component={UpdateStudent}
        exact
        isPrivate
      />
      <Route path="/Professores" component={Professores} isPrivate />
      <Route path="/Disiplinas" component={Disiplinas} isPrivate />
      <Route path="/Cursos" component={Cursos} isPrivate />
      <Route path="/Turmas" component={Turmas} isPrivate />
    </Switch>
  );
}
