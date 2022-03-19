import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { getAuthStatus } from './store/actions/appActions';
import fieldActions from './store/actions/fieldActions';
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
    const { busy } = useSelector((state) => state.appState);

    const intiateState = (state) => {
        dispatch(fieldActions.initiateFormFieldState(state))
    }

    useEffect(() => {
        console.log('Application has been mounted');
        dispatch(getAuthStatus());
    }, []);

    const loadingScreen = () => {
        return (
            <Loader open={busy} />
        )
    }

    const signupScreen = () => {
        intiateState(viewConfig.login);
        return (
            <Login />
        )
    }

    return (
        <Theme>
            <CssBaseline />
            <div className="App">
                <Slider>
                    <ThemeSelector />
                </Slider>
                {loadingScreen()}
                {authenticationStatus === constants.AUTHTOKEN_ERROR ? signupScreen() : null}
            </div>
        </Theme>
        
    );
}

export default App;
