import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import constants from './../constants/constants';
import Palette from '../themes/Palette';

const palette = new Palette();

const authReducer = (state = {}, action = {}) => {
    switch (action.type) {
    case constants.USER_AUTHENTICATED:
        return {
            ...state,
            authenticationStatus: action.type
        };
    case constants.AUTHTOKEN_ERROR:
        return {
            ...state,
            authenticationStatus: action.type
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

const initialState = {
    auth: {
        authenticationStatus: 'UNKNOWN'
    },
    profile: {},
    theme: {
        palette: palette
    }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    theme: themeReducer
});

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;