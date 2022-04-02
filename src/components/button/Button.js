import React from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = (props = {}) => {
    const {
        name='Submit',
        id='Submit',
        text='Submit',
        styleOverride={},
        variant='contained',
        className='',
        ...restProps
    } = props;

    return (
        <MUIButton
            {...restProps}
            className={className}
            sx={styleOverride}
            id={id}
            name={name}
            variant={variant}
        >
            {text}
        </MUIButton>
    )
}

export default Button;