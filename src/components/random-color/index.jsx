import React, { useCallback, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import "./style.css";

/**
 * * 1) Add generated color for buttons & style buttons +
 * * 2) Make function copy generated color
 */

export default function RandomColor() {
	const [typeOfColor, setTypeOfColor] = useState("hex");
	const [color, setColor] = useState("#000000");
	const [valueOfColor, setValueOfColor] = useState(null);
	const [copied, setCopied] = useState(false);
	const onCopy = () => {
		setCopied(true);
		setValueOfColor(color);
	};

	const randomColorUtility = (length) => {
		return Math.floor(Math.random() * length);
	};

	const handleCreateRandomHexColor = () => {
		const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
		let hexColor = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorUtility(hex.length)];
		}
		// console.log("handleCreateRandomHexColor: ", color);
		setColor(hexColor);
	};

	const removeNotification = () => {
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	const handleCreateRandomRgbColor = () => {
		const r = randomColorUtility(256);
		const g = randomColorUtility(256);
		const b = randomColorUtility(256);

		setColor(`rgb${r},${g},${b}`);
		// console.log("handleCreateRandomRgbColor: ", color);
	};

	useEffect(() => {
		if (typeOfColor === "rgb") handleCreateRandomRgbColor();
		else handleCreateRandomHexColor();
	}, [typeOfColor]);

	useEffect(() => {
		removeNotification();
	}, [copied]);

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				padding: "20px",
				backgroundColor: color,
				boxSizing: "border-box",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<button
					style={{
						padding: "8px",
						borderRadius: "4px",
						margin: "0 4px",
						fontSize: "16px",
						color: "#fff",
						background: color,
					}}
					onClick={() => setTypeOfColor("hex")}
				>
					Create HEX color
				</button>
				<button
					style={{
						padding: "8px",
						borderRadius: "4px",
						margin: "0 4px",
						fontSize: "16px",
						color: "#fff",
						background: color,
					}}
					onClick={() => setTypeOfColor("rgb")}
				>
					Create RGB color
				</button>
				<button
					style={{
						padding: "8px",
						borderRadius: "4px",
						margin: "0 4px",
						fontSize: "16px",
						color: "#fff",
						background: color,
					}}
					onClick={
						typeOfColor === "hex"
							? handleCreateRandomHexColor
							: handleCreateRandomRgbColor
					}
				>
					Generate Random Color
				</button>
			</div>
			<div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						color: "#fff",
						fontSize: "60px",
						maxWidth: "75%",
						margin: "100px auto 40px",
						position: "relative",
					}}
				>
					{/* Copy Button*/}
					<CopyToClipboard onCopy={onCopy} text={color}>
						<button className="btn-copy">
							<FaRegCopy size={34} />
							<span
								className={copied ? "notification is-active" : "notification"}
							>
								{valueOfColor} is copied!
							</span>
						</button>
					</CopyToClipboard>

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
		</div>
	);
}
