import React from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import InputWrapper from '../inputWrapper/InputWrapper';

const Login = () => {

    return (
        <Box sx={{ display: 'grid' }}>
            <InputWrapper label="Username" variant="outlined" />
            <InputWrapper label="Password" variant="outlined" />
            <Button variant="outlined">Login</Button>
        </Box>
    )
}

export default Login;