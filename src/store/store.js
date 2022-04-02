import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import constants from './../constants/constants';
import Palette from '../themes/Palette';
import { getItem, setItem } from '../services/localStorage';
import formFieldReducer from './reducers/formFieldReducer';
import themeReducer from './reducers/themeReducer';
import profileReducer from './reducers/profileReducer';
import appReducer from './reducers/appReducer';
import localeReducer from './reducers/localeReducer';

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

const initialState = {
    auth: {
        authenticationStatus: 'UNKNOWN'
    },
    profile: {},
    theme: {
        palette: palette
    },
    formFields: {},
    appState: {
        busy: 0
    },
    locale: {
        locale: undefined,
        getContent: undefined
    }
}

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    theme: themeReducer,
    formFields: formFieldReducer,
    appState: appReducer,
    locale: localeReducer
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;