import React from 'react';
import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import fieldAction from '../../store/fieldAction';

const InputWrapper = (props) => {
    const {
        fieldId
    } = props;

    const value = useSelector(state => {
        const formFields = state.formFields || {};
        return formFields.value || ''
    });

    const dispatch = useDispatch();

    const onChange = (e) => {
        const payload =  {
            fieldId,
            value: e.target.value
        };

        dispatch(fieldAction.updateField(payload))
    };

    return (
        <TextField
            {...props}
            value = {value}
            id={fieldId}
            onChange={onChange}
        />
    )
}

export default InputWrapper;