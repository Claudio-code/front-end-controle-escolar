import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

import { Label } from './styles';

function SelectComponent({
  id, label, value, onchangeValue, options,
}) {
  return (
    <FormControl fullWidth>
      <Label id={label}>{ label }</Label>
      <Select
        id={`${label}-${id}`}
        labelId={String(id)}
        value={value}
        onChange={onchangeValue}
      >
        {options && options.map((item) => (
          <MenuItem key={`${label}-${id}`} value={item}>{ item }</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

SelectComponent.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onchangeValue: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

SelectComponent.defaultProps = {
  id: '1',
  label: '',
  value: '',
  onchangeValue: () => {},
  options: [],
};

export default SelectComponent;
