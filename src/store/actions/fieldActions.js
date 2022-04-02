import constants from '../../constants/constants';

const fieldStateToUpdate = (state = {}, fieldId = '') => {
    const formFields = state.formFields || {};
    return formFields[fieldId] || {}
}

// eslint-disable-next-line no-unused-vars
const validateField = (fieldState, eventType) => {
    return fieldState;
}

const updateAndValidateField = (params) => {
    return function(dispatch, getState) {
        const {
            fieldId,
            value,
            eventType
        } = params;
        const state = getState();
        const stateToUpdate = fieldStateToUpdate(state, fieldId);
        stateToUpdate.value = value;
        validateField(stateToUpdate, eventType);
        dispatch(
            {
                type: constants.UPDATE_FIELD,
                payload: stateToUpdate
            }
        )
    }
}

const initiateFormFieldState = (stateToUpdate) => {
    return function(dispatch) {
        dispatch(
            {
                type: constants.INITIATE_FORM_FIELDS,
                payload: stateToUpdate
            }
        )
    }
}

export default {
    updateAndValidateField,
    initiateFormFieldState
}