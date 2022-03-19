import React from 'react';
import Arrow from './Arrow';

const getValidSvg = (name) => {
    if (!name) {
        return null;
    }

    const svgs = {
        arrow: Arrow
    }

    return svgs[name];
}

const SvgWrapper = (props) => {
    const {
        name = '',
        points = '',
        fill = '',
        stroke = '',
        height,
        width,
        onClick
    } = props;

    const CustomSvg = getValidSvg(name);
    if (CustomSvg) {
        return <CustomSvg { ...props } />
    }
    return (
        <svg height={height} width={width} onClick={onClick}>
            <polygon
                points={points}
                fill={fill}
                stroke={stroke}
            />
        </svg>
    )
}

export default SvgWrapper;