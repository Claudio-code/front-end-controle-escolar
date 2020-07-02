import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';
import {
  Search,
  Clear,
  ChevronLeft,
  ChevronRight,
  ViewColumn,
  FirstPage,
  LastPage,
  Check,
  FilterList,
} from '@material-ui/icons';

import { Container } from './styles';

function UpdateStudent() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'email' },
      { title: 'cpf' },
      { title: 'rg' },
      { title: 'cnh' },
      { title: 'age' },
      { title: 'sex' },
      { title: 'ethnicity' },
      { title: 'status' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      {
        name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63,
      },
      {
        name: 'Zerya Betül',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <Container>
      <MaterialTable
        title="Editar Registros do Aluno"
        columns={state.columns}
        icons={{
          Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
          Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
          DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
          Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
          FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
          LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
          NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
          PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
          ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
          Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
          ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
        }}
        onRowClick={(data) => alert(data)}
        data={state.data}
      />
    </Container>
  );
}

export default UpdateStudent;
