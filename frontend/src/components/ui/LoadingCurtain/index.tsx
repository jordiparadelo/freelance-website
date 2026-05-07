"use client";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import AvatarPic from "../../../../public/images/avatar-stripe.png";
import Curves from "../Curves";
import { loadingAnimation } from "./animations";
import styles from "./styles.module.css";

const LoadingCurtain = () => {
	const componentRef = useRef(null);

	loadingAnimation(componentRef);

	return (
		<div className={styles["loading-curtain"]} ref={componentRef}>
			<div className={styles["layout"]}>
				<ProgressCircle />
				<Avatar />
			</div>
			<span className={styles["progress-number"]} data-target="progress-number">
				0
			</span>
			<Curves orientation="top" fill="var(--background-color--base)" />
		</div>
	);
};

const Avatar = () => {
	return <div data-target="avatar" className={styles["avatar"]}></div>;
};

type ProgressCircleProps = {
	stroke?: number;
	size?: number;
};

const ProgressCircle = (props: ProgressCircleProps) => {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 64 64"
			data-target="progress-circle"
		>
			<title>Progress Bar</title>
			<circle
				cx="32"
				cy="32"
				r="31"
				stroke="currentColor"
				strokeWidth={props.stroke || 0.5}
				fill="none"
				id="progress-path"
			/>
			<circle
				cx="32"
				cy="32"
				r="31"
				stroke="rgba(from currentColor r g b / 10%)"
				strokeWidth={props.stroke || 0.5}
				fill="none"
			/>
		</svg>
	);
};

export default LoadingCurtain;
