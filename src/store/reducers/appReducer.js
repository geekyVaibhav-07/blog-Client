import constants from '../../constants/constants';

const appReducer = (state = {}, action = {}) => {
    switch (action.type) {
    case constants.UPDATE_BUSY_STATE:
        return {
            ...state,
            busy: action.payload
        };
    default:
        return state
    }
}

export default appReducer;