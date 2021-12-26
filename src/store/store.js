import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import constants from './../constants/constants';
import Palette from '../themes/Palette';
import { getItem, setItem } from '../services/localStorage';

const getPaletteFromLocalStorage = getItem('palette');
const palette = getPaletteFromLocalStorage || new Palette('dark');
if(!getPaletteFromLocalStorage) {
    console.log('palette not found');
    setItem('palette', palette)
}

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

const formFieldReducer = (state = {}, action = {}) => {
    switch (action.type) {
    case constants.UPDATE_FIELD:
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
    },
    formFields: {}
}

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    theme: themeReducer,
    formFields: formFieldReducer
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;