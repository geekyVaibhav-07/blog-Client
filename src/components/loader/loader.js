import React from 'react';
import { Modal } from '@mui/material';
import { Loop } from '@mui/icons-material';
import './loader.css';

const defaultWrapperStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	outline: 'none'
};

const defaultStyle = {
	fontSize: '200px',
	animation: 'spinner infinite 2s linear',
	outline: 'none'
}

const Loader = (props) => {
	const {
		wrapperStyleOveride = {},
		styleOverride = {},
		handleClose,
		open = false,
	}  = props;

	const wrapperStyle = {
		...defaultWrapperStyle,
		...wrapperStyleOveride
	};

	const style = {
		...defaultStyle,
		...styleOverride
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<div style={wrapperStyle}>
				<Loop color="primary" sx={style} />
			</div>
		</Modal>
	)
};

export default Loader