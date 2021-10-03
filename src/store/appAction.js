import constants from '@geekcorp/constants';
import AuthService from '../services/authService';

const authService = new AuthService();

const getAuthStatus = async (dispatch) => {
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
    }
    catch {
        dispatch({
            type: constants.AUTHTOKEN_ERROR
        })
    }
    
}

export {
    getAuthStatus
};