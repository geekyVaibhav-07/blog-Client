import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../button/Button';
import { ajaxSubmit } from '../../store/actions/appActions';

const ButtonWrapper = (props) => {
	const {
		action='',
		href='',
		dataMap = {},
		validation = true,
		text='',
		...restProps
	} = props;

	const translator = useSelector(state => state.locale);
	const buttonText = translator.getContent(text);

	const dispatch = useDispatch();

	const onClick = (e) => {
		e.preventDefault();
		if (action && !href) {
			dispatch(ajaxSubmit({ action, dataMap, validation }));
		}
		else if (href) {
			window.location.href = href;
		}
	}

	return (
		<Button
			{...restProps}
			text={buttonText}
			onClick={onClick}
		/>
	)
}

export default ButtonWrapper;