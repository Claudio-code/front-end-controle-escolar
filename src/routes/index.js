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
import Teachers from '../pages/Teachers';
import TeacherRegistration from '../pages/TeacherRegistration';
import UpdateTeacher from '../pages/UpdateTeacher';
import Disciplines from '../pages/Disciplines';
import Cursos from '../pages/Cursos';
import Turmas from '../pages/Turmas';
import Topics from '../pages/Topics';
import TopicRegistration from '../pages/TopicRegistration';
import UpdateTopics from '../pages/UpdateTopics';

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
      <Route
        path="/Professores"
        component={Teachers}
        exact
        isPrivate
      />
      <Route
        path="/Professores/Cadastros"
        component={TeacherRegistration}
        exact
        isPrivate
      />
      <Route
        path="/Professores/Update"
        component={UpdateTeacher}
        exact
        isPrivate
      />
      <Route
        path="/Topicos"
        component={Topics}
        exact
        isPrivate
      />
      <Route
        path="/Topicos/Cadastros"
        component={TopicRegistration}
        exact
        isPrivate
      />
      <Route
        path="/Topicos/Update"
        component={UpdateTopics}
        exact
        isPrivate
      />
      <Route path="/Disiplinas" component={Disciplines} isPrivate />
      <Route path="/Cursos" component={Cursos} isPrivate />
      <Route path="/Turmas" component={Turmas} isPrivate />
    </Switch>
  );
}
