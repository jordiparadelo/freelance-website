// Components
import { SectionLabel } from "@/ui";
import Image from "next/image";
// Styles
import styles from "./styles.module.scss";

const ServiceCard = ({ service }) => {
	return (
		<figure
			className={styles["service-card"]}
			data-type={service.type}
			data-component='service-card'
		>
			<figcaption className={styles["service-card__details"]}>
				<div className={styles["service-card__title-wrapper"]}>
					<h3 className={styles["service-card__title"]}>{service.title}</h3>
				</div>
				<p className={styles["service-card__description"]}>
					{service.description}
				</p>
			</figcaption>
			<div className={styles["service-card__image-container"]}>
				{service.gallery.map((image, index) => (
					<Image
						unoptimized
						src={image.src}
						alt={image.alt}
						width={image.width}
						height={image.height}
						key={image.alt + index}
						className={styles["service-card__image"]}
					/>
				))}
			</div>
		</figure>
	);
};

export default ServiceCard;
