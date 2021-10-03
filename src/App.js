import React, { useEffect } from 'react';
import { Loop } from '@mui/icons-material';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { getAuthStatus } from './store/appAction';
import './App.css';

const  App = () => {
    const dispatch = useDispatch();
    const { authenticationStatus } = useSelector((state) => state.auth);
    const { palette } = useSelector((state) => state.theme);
    const theme = createTheme({
        palette
    });

    useEffect(() => {
        console.log('Application has been mounted');
        getAuthStatus(dispatch);
    }, []);

    const loadingScreen = () => {
        return <Loop className="App-loader" color="primary" sx={{ fontSize: 200 }}/>;
    }

    return (
        <ThemeProvider  theme={theme}>
            <CssBaseline />
            <div className="App">
                {authenticationStatus === 'UNKNOWN' ? 'Login' : loadingScreen()}
                <Button variant="outlined">Outlined</Button>
            </div>
        </ThemeProvider>
        
    );
}

export default App;
