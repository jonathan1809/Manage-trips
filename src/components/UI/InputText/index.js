import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import './index.scss'

const InputText = (props) => {
  const { value, handle, isInvalid, name, label, messageError } = props;

  return (
    <div className='root'>
      <FormControl
        error={isInvalid}
        aria-describedby={isInvalid ? 'component-error-text' : ''}
        style={{ width: '100%' }}
      >
        <InputLabel htmlFor='input-text'>{label}</InputLabel>
        <Input
          id='input-text'
          value={value}
          onChange={handle}
          name={name}

        />
        {isInvalid ? <FormHelperText id='component-error-text'>{messageError}</FormHelperText> : null}
      </FormControl>
    </div >
  );

}

export default InputText;