import React, { useState } from 'react';
import { Card } from '@mui/material';
import SvgWrapper from '../svg/SvgWrapper';
import './slider.css';

const Slider = (props) => {
	const [ exploreStatus, toggleExploredStatus ] = useState(false);
	const [ mountStaus, toggleMountStaus ] = useState(false);
    
	const toggleThemePan = () => {
		if (exploreStatus) {
			toggleExploredStatus(false);

			/**
             * Child components should be unmounted at the end of the animation
             * the delay has been choosen based on the animation time from css file
             */
			setTimeout(() => toggleMountStaus(false), 500);
		}
		else {
			toggleExploredStatus(true);
            
			/**
             * Child components should be mounted at the begining of the animation
             */
			toggleMountStaus(true);
		}
	}

	const getPanStyle = () => {
		let style = 'slider';
		if (exploreStatus) {
			style+= ' explored';
			return style;
		}
		style+= ' unexplored';
		return style;
	}

	const renderChildren = (exploreStatus) => {
		if (exploreStatus) {
			return props.children;
		}
		return null;
	}

	const explorer = (exploreStatus) => {
		if (exploreStatus) {
			return (
				<div className='slider-explorer-wrapper'>
					<SvgWrapper width='50px' height='30px' name='arrow' onClick={toggleThemePan} />
				</div>
			)
		}
		return null
	}

	return (
		<Card  variant="outlined" className={getPanStyle()} onClick={exploreStatus ? () => {} : toggleThemePan}>
			<Card className='slider-children left'>
				{explorer(mountStaus)}
			</Card>
			<Card  className='slider-children right' variant="outlined">
				{renderChildren(mountStaus)}
			</Card>
		</Card>
	)
}

export default Slider;
