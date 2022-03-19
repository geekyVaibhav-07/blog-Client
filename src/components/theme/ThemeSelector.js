import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Palette from '../../themes/Palette';
import constants from '../../constants/constants';
import { Avatar, Select, MenuItem, InputLabel } from '@mui/material';

const ThemeSelector = () => {
    const dispatch = useDispatch();
    const { palette } = useSelector((state) => state.theme);

    const handleClick = (e) => {
        e.preventDefault();
        const value = e.target.value;
        const palette = new Palette(value);
        dispatch({
            type: constants.UPDATE_PALETTE,
            payload: {
                palette
            }
        })
    };

    const mode = palette.mode;
    const lightAvatar = <Avatar name = 'light' variant="square" sx={{ color: 'primary.light', bgcolor: 'white' }}>L</Avatar>;
    const darkAvatar =  <Avatar name = 'dark' variant="square" sx={{  color: 'primary.dark', bgcolor: 'black' }}>D</Avatar>;

    return (
        <>
            <InputLabel id="theme-selector-label">Theme</InputLabel>
            <Select
                labelId="theme-selector-label"
                id="demo-simple-select"
                value={mode}
                label="Theme"
                onChange={handleClick}
            >
                <MenuItem value='dark'>{darkAvatar}</MenuItem>
                <MenuItem value='light'>{lightAvatar}</MenuItem>
            </Select>
        </>
    )
}

export default ThemeSelector;