import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../button/Button';
import { ajaxSubmit } from '../../store/actions/appActions';

const ButtonWrapper = (props) => {
    const {
        action='',
        href='',
        dataMap = {},
        validation = true,
        ...restProps
    } = props;

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
            onClick={onClick}
        />
    )
}

export default ButtonWrapper;