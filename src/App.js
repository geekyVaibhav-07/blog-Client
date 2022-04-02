import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { getAuthStatus } from './store/actions/appActions';
import fieldActions from './store/actions/fieldActions';
import localeActions from './store/actions/localeActions';
import Loader from './components/loader/loader';
import constants from './constants/constants';
import './App.css';
import Login from './components/login/Login';
import viewConfig from './viewConfigs';
import Theme from './themes/Theme';
import ThemeSelector from './components/theme/ThemeSelector';
import Slider from './components/slider/Slider';

const  App = () => {
    const dispatch = useDispatch();
    const { authenticationStatus } = useSelector((state) => state.auth);
    const { locale } = useSelector((state) => state.locale);
    const { busy } = useSelector((state) => state.appState);

    const intiateState = (state) => {
        dispatch(fieldActions.initiateFormFieldState(state))
    }

    useEffect(() => {
        console.log('Application has been mounted');
        dispatch(localeActions.updateLocale('en'));
        dispatch(getAuthStatus());
    }, []);

    const loadingScreen = () => {
        return (
            <Loader open={busy ? true : false} />
        )
    }

    const signupScreen = () => {
        intiateState(viewConfig.login);
        return (
            <Login />
        )
    }

    const renderMainApp = () => {
        if (locale) {
            if (authenticationStatus === constants.AUTHTOKEN_ERROR) {
                return signupScreen();
            }
        }
        return null;
    }

    return (
        <Theme>
            <CssBaseline />
            <div className="App">
                <Slider>
                    <ThemeSelector />
                </Slider>
                {loadingScreen()}
                {renderMainApp()}
            </div>
        </Theme>
        
    );
}

export default App;
