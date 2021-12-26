import constants from '../constants/constants';

const updateField = (payload) => {
    return {
        type: constants.UPDATE_FIELD,
        payload: {
            [payload.fieldId]: payload
        }
    }
}

export default {
    updateField
}