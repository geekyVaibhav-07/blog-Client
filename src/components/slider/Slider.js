import React, { useState } from 'react';
import { Card } from '@mui/material';
import SvgWrapper from '../svg/SvgWrapper';
import './slider.css';

const Slider = (props) => {
    const [ isExplored, toggleExploredStatus ] = useState(false);
    
    const toggleThemePan = () => {
        isExplored ? toggleExploredStatus(false) : toggleExploredStatus(true);
    }

    const getPanStyle = () => {
        let style = 'slider';
        if (isExplored) {
            style+= ' explored';
            return style;
        }
        style+= ' unexplored';
        return style;
    }

    const renderChildren = (isExplored) => {
        if (isExplored) {
            return props.children;
        }
        return null;
    }

    const explorer = (isExplored) => {
        if (isExplored) {
            return (
                <div className='slider-explorer-wrapper'>
                    <SvgWrapper width='50px' height='30px' name='arrow' onClick={toggleThemePan} />
                </div>
            )
        }
        return null
    }

    return (
        <Card  variant="outlined" className={getPanStyle()} onClick={isExplored ? () => {} : toggleThemePan}>
            <Card className='slider-children left'>
                {explorer(isExplored)}
            </Card>
            <Card  className='slider-children right' variant="outlined">
                {renderChildren(isExplored)}
            </Card>
        </Card>
    )
}

export default Slider;
