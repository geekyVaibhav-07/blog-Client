import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { getAuthStatus } from './store/appAction';
import Loader from './components/loader/loader';
import constants from './constants/constants';
import './App.css';
import Login from './components/login/Login';

const  App = () => {
    const dispatch = useDispatch();
    const { authenticationStatus } = useSelector((state) => state.auth);
    const { palette } = useSelector((state) => state.theme);
    const theme = createTheme({
        palette
    });

    useEffect(() => {
        console.log('Application has been mounted');
        dispatch(getAuthStatus());
    }, []);

    const loadingScreen = () => {
        return (
            <Loader open={authenticationStatus === 'UNKNOWN'} />
        )
    }

    const signupScreen = () => {
        return (
            <Login />
        )
    }

    return (
        <ThemeProvider  theme={theme}>
            <CssBaseline />
            <div className="App">
                {loadingScreen()}
                {authenticationStatus === constants.AUTHTOKEN_ERROR ? signupScreen() : null}
            </div>
        </ThemeProvider>
        
    );
}

export default App;
