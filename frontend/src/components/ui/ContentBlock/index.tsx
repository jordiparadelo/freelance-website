'use client';
import styles from './styles.module.scss';

interface ContentBlockProps {
	title: string;
	children: React.ReactNode;
    className?: string;
}

const ContentBlock = ({
	title,
	children,
	className,
}: ContentBlockProps) => {
	return (
		<section className={`${styles["content-block"]} ${className}`}>
			<h2 className={styles["content-block__heading"]}>{title}</h2>
			{children}
		</section>
	);
};

ContentBlock.displayName = 'ContentBlock';

export default ContentBlock; 