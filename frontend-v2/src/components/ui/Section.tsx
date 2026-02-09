import type React from "react";
import styles from "@/styles/Section.module.css";

interface SectionProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
	ref?: React.RefObject<HTMLDivElement>;
}
const Section = (
	props: SectionProps & React.HTMLAttributes<HTMLDivElement>,
) => {
	const { children, className, id, ref = null, ...rest } = props;
	return (
		<section
			className={`${styles.section} ${className}`}
			id={id}
			ref={ref}
			{...rest}
		>
			{children}
		</section>
	);
};

export default Section;
