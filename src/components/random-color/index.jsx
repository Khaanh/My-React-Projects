import React, { useEffect, useState } from "react";

/**
 * * 1) Add generated color for buttons & style buttons
 * * 2) Make function copy generated color
 */

export default function RandomColor() {
	const [typeOfColor, setTypeOfColor] = useState("hex");
	const [color, setColor] = useState("#000000");

	const randomColorUtility = (length) => {
		return Math.floor(Math.random() * length);
	};

	const handleCreateRandomHexColor = () => {
		const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
		let hexColor = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorUtility(hex.length)];
		}

		setColor(hexColor);
	};

	const handleCreateRandomRgbColor = () => {
		const r = randomColorUtility(256);
		const g = randomColorUtility(256);
		const b = randomColorUtility(256);

		setColor(`rgb${r},${g},${b}`);
	};

	useEffect(() => {
		if (typeOfColor === "rgb") handleCreateRandomRgbColor();
		else handleCreateRandomHexColor();
	}, [typeOfColor]);

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				padding: "20px",
				background: color,
				boxSizing: "border-box",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
				<button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
				<button
					onClick={
						typeOfColor === "hex"
							? handleCreateRandomHexColor
							: handleCreateRandomRgbColor
					}
				>
					Generate Random Color
				</button>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					color: "#fff",
					fontSize: "60px",
					marginTop: "100px",
				}}
			>
				<h3
					style={{
						marginBottom: "0px",
						marginTop: "0px",
					}}
				>
					{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
				</h3>
				<h1
					style={{
						marginBottom: "0px",
						marginTop: "0px",
					}}
				>
					{color}
				</h1>
			</div>
		</div>
	);
}
