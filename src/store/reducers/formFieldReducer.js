import constants from '../../constants/constants';
const formFieldReducer = (state = {}, action = {}) => {
    const { fieldId } = action.payload || {};
    switch (action.type) {
    case constants.UPDATE_FIELD:
        return {
            ...state,
            [fieldId]: {
                ...action.payload
            }
        };
    case constants.INITIATE_FORM_FIELDS:
        return {
            ...state,
            ...action.payload
        }
    default:
        return state
    }
}

export default formFieldReducer;