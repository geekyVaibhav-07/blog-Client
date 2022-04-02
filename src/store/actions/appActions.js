import constants from '../../constants/constants';
import AuthService from '../../services/authService';

const authService = new AuthService();

const runValidation = () => {
	return true;
}

const resolveDataMap = (dataMap, state={}) => {
	const data = {}
	Object.keys(dataMap).forEach(key => {
		if (typeof dataMap[key] === 'string') {
			data[key] = state[dataMap[key]].value;
		}
		else if (typeof dataMap.key === 'object') {
			data[key] = resolveDataMap(dataMap[key], state)
		}
	});
	return data;
}

const getAuthStatus = () => {
	return async function(dispatch) {
		dispatch(setAppBusy())
		try {
			const response = await authService.isAuthenticated();
			if (response && response.statusCode === 200 ) {
				if (response.body.message === constants.USER_AUTHENTICATED) {
					dispatch({
						type: response.body.message
					})
				}
			}
			dispatch({
				type: constants.AUTHTOKEN_ERROR
			})
			dispatch(unsetAppBusy())
		}
		catch {
			dispatch({
				type: constants.AUTHTOKEN_ERROR
			})
			dispatch(unsetAppBusy())
		}
	}
}

const login = async (dispatch, data) => {
	try {
		dispatch(setAppBusy())
		const response = await authService.login(data);
		if (response && response.statusCode === 200 ) {
			if (response.body.message === constants.USER_AUTHENTICATED) {
				dispatch({
					type: response.body.message
				})
			}
		}
		dispatch({
			type: constants.AUTHTOKEN_ERROR
		})
		dispatch(unsetAppBusy())
	}
	catch {
		dispatch({
			type: constants.AUTHTOKEN_ERROR
		})
		dispatch(unsetAppBusy())
	}
}

const setAppBusy = () => {
	return {
		type: constants.UPDATE_BUSY_STATE,
		payload: true
	}
}

const unsetAppBusy = () => {
	return {
		type: constants.UPDATE_BUSY_STATE,
		payload: false
	}
}

const ajaxSubmit = (params) => {
	return async function (dispatch, getState) {
		const {
			action = '',
			dataMap = {},
			validation = true
		} = params;
		const state = getState();
		const formFields = state.formFields;
		if (validation && !runValidation(formFields)) {
			return;
		}
		const data = resolveDataMap(dataMap, formFields);
		if (action === 'login') {
			return login(dispatch, data);
		}
	}
}

export {
	getAuthStatus,
	login,
	setAppBusy,
	unsetAppBusy,
	ajaxSubmit,
	runValidation
};