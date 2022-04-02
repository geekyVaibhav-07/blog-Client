import constants from '../../constants/constants';

const appReducer = (state = {}, action = {}) => {
	switch (action.type) {
	case constants.UPDATE_BUSY_STATE:
		return {
			...state,
			busy: action.payload ? state.busy + 1 : state.busy - 1
		};
	default:
		return state
	}
}

export default appReducer;