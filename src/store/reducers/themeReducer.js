import constants from '../../constants/constants';

const themeReducer = (state = {}, action = {}) => {
	switch (action.type) {
	case constants.UPDATE_PALETTE:
		return {
			...state,
			...action.payload,
		};
	default:
		return state
	}
}

export default themeReducer;