import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';


// import { Container } from './styles';

const CheckboxComponent = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
      color="primary"
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
  );
};

export default CheckboxComponent;
