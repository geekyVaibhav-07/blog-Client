import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import constants from '@geekcorp/constants';

const authReducer = (state = {}, action = {}) => {
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

const initialState = {
    auth: {
        authenticated: false
    },
    profile: {},
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer
});

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;