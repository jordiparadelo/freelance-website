interface Props {
	className?: string;
}

const LinkIcon: React.FC<Props> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className}
		>
			<path fill="currentColor" d="M6.4 18 5 16.6 14.6 7H6V5h12v12h-2V8.4z" />
		</svg>
	);
};

export default LinkIcon;
