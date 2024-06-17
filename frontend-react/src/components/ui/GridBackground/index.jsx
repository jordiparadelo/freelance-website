"use client";
import React, { memo, useRef, useEffect } from "react";

const GridBackground = memo((props) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const width = (canvas.width = window.innerWidth);
		const height = (canvas.height = window.innerHeight);

		const gridSpacing = 150; // spacing between grid lines

		function drawGrid() {
			ctx.strokeStyle = "#444"; // grid line color
			ctx.lineWidth = 1;

			// Draw vertical lines
			for (let x = 0; x <= canvas.width; x += gridSpacing) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, canvas.height);
				ctx.stroke();
			}

			// Draw horizontal lines
			for (let y = 0; y <= canvas.height; y += gridSpacing) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(canvas.width, y);
				ctx.stroke();
			}
		}

		function animateGlow() {
			const isHorizontal = Math.random() >= 0.5;
			const maxLines = isHorizontal
				? canvas.height / gridSpacing
				: canvas.width / gridSpacing;
			const lineIndex = Math.floor(Math.random() * maxLines);

			const gradient = ctx.createLinearGradient(
				0,
				0,
				isHorizontal ? canvas.width : 0,
				isHorizontal ? 0 : canvas.height
			);
			gradient.addColorStop(0, "rgba(255,255,255,0)");
			gradient.addColorStop(0.5, "rgba(255,255,255,0.5)");
			gradient.addColorStop(1, "rgba(255,255,255,0)");

			let startTime = null;
			const duration = 3000; // Duration of the animation in milliseconds

			function animate(time) {
				if (!startTime) startTime = time;
				const elapsed = time - startTime;

				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawGrid();

				const progress = Math.min(elapsed / duration, 1);
				const glowPos =
					progress * (isHorizontal ? canvas.width : canvas.height);
				const trailLength = 100; // Length of the glow tail

				ctx.strokeStyle = gradient;
				ctx.lineWidth = 2 + 2 * progress;

				if (isHorizontal) {
					ctx.beginPath();
					ctx.moveTo(glowPos - trailLength, lineIndex * gridSpacing);
					ctx.lineTo(glowPos, lineIndex * gridSpacing);
					ctx.stroke();
				} else {
					ctx.beginPath();
					ctx.moveTo(lineIndex * gridSpacing, glowPos - trailLength);
					ctx.lineTo(lineIndex * gridSpacing, glowPos);
					ctx.stroke();
				}

				if (progress < 1) {
					requestAnimationFrame(animate);
				} else {
					setTimeout(animateGlow, 2000); // Wait for 2 seconds before the next animation
				}
			}

			requestAnimationFrame(animate);
		}


		drawGrid();
		animateGlow();
	}, []);

	return (
		<canvas
			ref={canvasRef}
			{...props}
		></canvas>
	);
});

export default GridBackground;