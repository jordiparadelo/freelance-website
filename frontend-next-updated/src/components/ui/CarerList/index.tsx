import styles from "./styles.module.scss";
import { Carer } from "@/lib/types";

interface CarerListProps {
	carers: Carer[];
}

const CarerList = ({ carers }: CarerListProps) => {
	return (
		<ol className={styles["carer-list"]}>
			{carers.map((carer) => (
				<li
					key={carer.company}
					className={styles["carer-list__item"]}
				>
					<h3 className={styles["carer-list__title"]}>{carer.title}</h3>
					<div className={styles["carer-list__content"]}>
						<p className={styles["carer-list__details"]}>
							<span>{carer.company}</span> • <span>{carer.role}</span>
						</p>
						<p className={styles["carer-list__description"]}>
							{carer.description}
						</p>
					</div>
					<div className={styles["carer-list__meta"]}>
						<p className={styles["carer-list__duration"]}>{carer.duration}</p>
						<p className={styles["carer-list__years"]}>{carer.years}</p>
					</div>
				</li>
			))}
		</ol>
	);
};

export default CarerList;
