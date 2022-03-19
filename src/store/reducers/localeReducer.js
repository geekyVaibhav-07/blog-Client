import constants from '../../constants/constants';

const localeReducer = (state = {}, action = {}) => {
    switch (action.type) {
    case constants.UPDATE_LOCALE:
        console.log(action.payload.getContent);
        return {
            ...state,
            ...action.payload
        };
    default:
        return state
    }
}

export default localeReducer;