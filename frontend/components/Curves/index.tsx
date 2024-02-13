import React from "react";

type CurvesProps = {
	className?: string;
	orientation?: "top" | "bottom";
	fill?: string;
};

const Curves = ({ className, orientation, fill }: CurvesProps) => {
    const TRANSFORM_OPTIONS = {
        top: "rotate(180deg) translateY(calc(100% - 1px))",
        bottom: " translateY(calc(100% - 1px))"
    }
    
	return (
		<svg
			viewBox='0 0 1440 55'
			fill={fill || 'currentColor'}
			xmlns='http://www.w3.org/2000/svg'
			className={className}
            style={{
                transform: TRANSFORM_OPTIONS[orientation] || undefined,
                width: '100vw',
                alignSelf: 'center',
                position: 'absolute',
                top: (orientation === "top") ? 0 : undefined,
                left: 0,
                bottom: (orientation === "bottom") ? 0 : undefined,
            }}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d="M1450 30c-207 16-458 25-730 25-273 0-523-9-720-25V0h1440v30Z"
			/>
		</svg>
	);
};

export default Curves;
