import React from 'react';
import PropTypes from 'prop-types';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

function SelectComponent(props) {
  const {
    id, label, value, onchangeValue, options,
  } = props;

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id={id}>{ label }</InputLabel>
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
