import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Student from '../pages/Student';
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
import Classes from '../pages/Classes';
import DisciplineRegistration from '../pages/DisciplineRegistration';
import UpdateDiscipline from '../pages/UpdateDiscipline';
import AddTeacherDiscipline from '../pages/AddTeacherDiscipline';
import CourseRegistration from '../pages/CourseRegistration';
import UpdateCourse from '../pages/UpdateCourse';
import AddCoordinatorCourse from '../pages/AddCoordinatorCourse';
import CourseRegistrationAndAddDisciplines from '../pages/CourseRegistrationAndAddDisciplines';
import ClassesRegistration from '../pages/ClassesRegistration';
import UpdateClasses from '../pages/UpdateClasses';
import AddCourseInClasse from '../pages/AddCourseInClasse';
import MakeMatriculation from '../pages/MakeMatriculation';
import ReportStudentResponsibleAndAddress from '../pages/ReportStudentResponsibleAndAddress';
import ReportTeachersDisciplines from '../pages/ReportTeachersDisciplines/index';
import ReportMatriculation from '../pages/ReportMatriculation/index';
import ReportTeachersCoordenation from '../pages/ReportTeachersCoordenation/index';
import ReportClasseCourse from '../pages/ReportClasseCourse/index';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route
      path="/dashboard"
      component={Dashboard}
      isPrivate
      exact
    />
    <Route
      path="/Alunos"
      exact
      component={Student}
      isPrivate
    />
    <Route
      path="/Alunos/relatorio/completo"
      exact
      component={ReportStudentResponsibleAndAddress}
      isPrivate
    />
    <Route
      path="/Alunos/MakeMatriculation"
      exact
      component={MakeMatriculation}
      isPrivate
    />
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
      path="/Alunos/relatorio/matriculados"
      component={ReportMatriculation}
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
      path="/Professores/relatorio/disiplinas"
      component={ReportTeachersDisciplines}
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
      path="/Cursos/Relatorio/Coordenador"
      component={ReportTeachersCoordenation}
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
    <Route
      path="/Turmas"
      component={Classes}
      isPrivate
      exact
    />
    <Route
      path="/Turmas/Cadastro"
      component={ClassesRegistration}
      isPrivate
      exact
    />
    <Route
      path="/Turmas/Update"
      component={UpdateClasses}
      isPrivate
      exact
    />
    <Route
      path="/Turmas/Adicionar/Curso"
      component={AddCourseInClasse}
      isPrivate
      exact
    />
    <Route
      path="/Turmas/Relatorio/Curso"
      component={ReportClasseCourse}
      isPrivate
      exact
    />
  </Switch>
);

export default Routes;
