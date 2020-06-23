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
    <div>
      <FormControl fullWidth>
        <Label>{ label }</Label>
        <Select

          id={id}
          value={value}
          onChange={onchangeValue}
        >
          {options.map((item) => (
            <MenuItem key={String(item)} value={item}>{ item }</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
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
