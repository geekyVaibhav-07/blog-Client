import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const Theme = (props) => {
	const { palette } = useSelector((state) => state.theme);
	const theme = createTheme({
		palette
	});

	return (
		<ThemeProvider  theme={theme}>
			{props.children}
		</ThemeProvider>
	)
}

export default Theme;