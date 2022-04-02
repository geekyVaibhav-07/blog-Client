import React from 'react';

/**
 * Should be used in memoized form for better performance
 * @param {points (in %) fill (optional), stoke (optional), onClick (click event handler) height (in px) width (in px)} props 
 * @returns arrow svg component
 */
const Arrow = (props) => {
	const {
		points = '0,25 60,25 60,0 100,50 60,100, 60,75 0,75',
		fill = '',
		stroke = 'none',
		onClick,
		height,
		width
	} = props;
	const id = 'arrowSvg';

	const constructPoints = () => {
		const w = width.replace('px','');
		const h = height.replace('px','');
		const absoluteValues = points.split(' ').map(point => {
			const [ x, y ] = point.split(',');
			return `${(x*w/100)},${(y*h/100)}`;
		});
		return absoluteValues.join(' ');
	}

	return (
		<svg height={height} width={width} onClick={onClick}>
			<defs>
				<linearGradient id={id} gradientTransform="rotate(90)">
					<stop offset="5%"  stopColor="#00cc99" />
					<stop offset="95%" stopColor="#1565c0" />
				</linearGradient>
			</defs>
			<polygon
				points={constructPoints(points)}
				fill={fill ? fill : `url(#${id})`}
				stroke={stroke}
			/>
		</svg>
	)
}

export default Arrow;