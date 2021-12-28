import React from 'react';
import { TextField } from '@mui/material';
// import { useSelector } from 'react-redux';

const InputField = (props) => {
    const {
        fieldId,
        type='text',
        name='',
        label='',
        disabled=false,
        additionalHTMLInputAttributes={},
        onChange,
        onBlur,
        onFocus,
        value
    } = props;

    // const value = useSelector(state => {
    //     const formFields = state.formFields || {};
    //     return (formFields[fieldId] || {}).value || ''
    // });

    // const dispatch = useDispatch();

    // const onChange = (e) => {
    //     console.log(e);
    //     const payload =  {
    //         fieldId,
    //         update: {
    //             value: e.target.value
    //         }
    //     };

    //     dispatch(fieldAction.updateField(payload))
    // };

    return (

        <TextField
            {...additionalHTMLInputAttributes}
            label={label}
            name={name}
            className="input-field"
            value = {value}
            id={fieldId}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={disabled}
        />
    )
}

export default InputField;