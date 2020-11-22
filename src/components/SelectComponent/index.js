import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

import { Label } from './styles';

const SelectComponent = ({
  id, label, value, onchangeValue, options,
}) => {
  useEffect(() => {
    if (options[0]) {
      const event = {
        target: {
          value: options[0],
        },
      };

      onchangeValue(event);
    }
  }, []);

  return (
    <FormControl fullWidth>
      <Label id={id}>{ label }</Label>
      <Select
        id={`${label}-${Math.random()}`}
        value={value}
        onChange={onchangeValue}
      >
        {options && options.map((item) => (
          <MenuItem key={`${label}-${Math.random()}`} value={item}>{ item }</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

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
