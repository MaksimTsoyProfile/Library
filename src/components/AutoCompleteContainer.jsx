import React from 'react';
import { Autocomplete } from '@material-ui/lab';

const AutocompleteContainer = ({
  loading, options, label, name, disabled = false, onChange, textFieldProps, ...rest
}) => {
  return (
    <Autocomplete
      name={name}
      label={loading ? 'Подождите' : label}
      variant="outlined"
      fullWidth
      disabled={disabled}
      options={options}
      getOptionValue={(option) => option.value}
      getOptionLabel={(option) => option.label}
      textFieldProps={{
        variant: 'outlined',
        size: 'small',
        ...textFieldProps,
      }}
      onChange={onChange}
      {...rest}
    />
  );
};

export default AutocompleteContainer;
