import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import './index.scss'
const InputAdornments = (props) => {
    const { value, handle, isInvalid, name, handleShowPassword, showPassword, label, messageError } = props;
    return (
        <div className='root'>
            <FormControl
                error={isInvalid} aria-describedby={isInvalid ? 'component-error-text' : ''}
                style={{ width: '100%' }}
            >
                <InputLabel htmlFor='password'>{label}</InputLabel>
                <Input                    
                    name={name}
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={handle}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='Toggle password visibility'
                                onClick={handleShowPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {isInvalid ? <FormHelperText id='component-error-text'>{messageError}</FormHelperText> : null}
            </FormControl>
        </div >
    )
}


export default InputAdornments;