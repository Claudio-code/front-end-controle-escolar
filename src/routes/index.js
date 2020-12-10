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
import Courses from '../pages/Courses';
import Turmas from '../pages/Turmas';
import DisciplineRegistration from '../pages/DisciplineRegistration';
import UpdateDiscipline from '../pages/UpdateDiscipline';
import AddTeacherDiscipline from '../pages/AddTeacherDiscipline';
import CourseRegistration from '../pages/CourseRegistration';
import UpdateCourse from '../pages/UpdateCourse';
import AddCoordinatorCourse from '../pages/AddCoordinatorCourse';
import CourseRegistrationAndAddDisciplines from '../pages/CourseRegistrationAndAddDisciplines';

const Routes = () => (
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
      path="/Disiplinas/Cadastro"
      component={DisciplineRegistration}
      exact
      isPrivate
    />
    <Route
      path="/Disiplinas/Update"
      component={UpdateDiscipline}
      exact
      isPrivate
    />
    <Route
      path="/Disiplinas/AdicionarProfessor"
      component={AddTeacherDiscipline}
      exact
      isPrivate
    />
    <Route
      path="/Disiplinas"
      component={Disciplines}
      isPrivate
      exact
    />
    <Route
      path="/Cursos"
      component={Courses}
      isPrivate
      exact
    />
    <Route
      path="/Cursos/Update"
      component={UpdateCourse}
      isPrivate
      exact
    />
    <Route
      path="/Cursos/Cadastro"
      component={CourseRegistration}
      isPrivate
      exact
    />
    <Route
      path="/Cursos/Cadastro/Adicionar/Disiplinas"
      component={CourseRegistrationAndAddDisciplines}
      isPrivate
      exact
    />
    <Route
      path="/Cursos/Cadastro/Adicionar/Coordenador"
      component={AddCoordinatorCourse}
      isPrivate
      exact
    />
    <Route path="/Turmas" component={Turmas} isPrivate />
  </Switch>
);

export default Routes;
