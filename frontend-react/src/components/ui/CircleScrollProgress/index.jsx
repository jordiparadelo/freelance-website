const CircleScrollProgress = ({ percentage, size }) => {
	const strokeWidth = 2;
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (percentage / 100) * circumference;
	const { scrollPosition, scrollToElement } = usePageScroll();


	return (
		<svg
			width={size}
			height={size}
		>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				fill='transparent'
				stroke='currentColor'
				strokeWidth={strokeWidth}
				strokeDasharray={circumference}
				strokeDashoffset={strokeDashoffset}
				strokeLinecap='round'
				shapeRendering='geometricPrecision'
			/>
			{/* <rect
				x={size / 4.375}
				y={size / 2.69}
				width={size / 2}
				height={strokeWidth}
				strokeLinecap='round'
				rx='1'
				fill='currentColor'
			/>
			<rect
				x={size / 4.375}
				y={size / 1.6}
				width={size / 2}
				height={strokeWidth}
				strokeLinecap='round'
				rx='1'
				fill='currentColor'
			/> */}
		</svg>
	);
};

export default CircleScrollProgress