import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../inputField/InputField';
import actionConfigurators from './../../store/utils/actionConfigurators';

const InputFieldWrapper = (props) => {

    const {
        fieldId='',
    } = props;

    const fieldState = useSelector(state => {
        return state.formFields && state.formFields[fieldId] || {}
    })

    const {
        onChane=[],
        onBlur=[],
        onFocus=[]
    } = fieldState;
    
    const dispatch = useDispatch();
    const actions = useCallback(actionConfigurators(fieldState, dispatch), [ ...onChane, ...onBlur, ...onFocus ]);

    const newProps = {
        ...props,
        ...fieldState
    };

    return (
        <InputField
            {...newProps}
            onFocus={actions}
            onBlur={actions}
            onChange={actions}
        />
    )
}

export default InputFieldWrapper;