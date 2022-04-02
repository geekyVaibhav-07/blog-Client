import constants from '../../constants/constants';

const profileReducer = (state = {}, action = {}) => {
	switch (action.type) {
	case constants.USER_AUTHENTICATED:
		return {
			...state,
			...action.payload,
		};
	default:
		return state
	}
};

export default profileReducer;