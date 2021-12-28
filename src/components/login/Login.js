import React from 'react';
import { Box } from '@mui/system';
import ButtonWrapper from '../buttonWrapper/ButtonWrapper';
import InputFieldWrapper from '../inputFieldWrapper/InputFieldWrapper';

const Login = () => {
    const loginDataMap = {
        email: 'email',
        password: 'password'
    }
    return (
        <Box className='login-grid'>
            <InputFieldWrapper fieldId="email" variant="outlined" />
            <InputFieldWrapper fieldId="password" variant="outlined"/>
            <ButtonWrapper action='login' dataMap={loginDataMap} className='primary-button' variant="contained" text='Login' styleOverride={{ marginLeft: '50%', transform: 'translate(-50%, 0)' }}/>
        </Box>
    )
}

export default Login;