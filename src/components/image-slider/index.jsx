import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
	const [images, setImages] = useState([]);
	const [currentSlider, setCurrentSlider] = useState(0);
	const [errorMsg, setErrorMsg] = useState(null);
	const [loading, setLoading] = useState(false);

	const handlePrevious = () => {
		setCurrentSlider(
			currentSlider === 0 ? images.length - 1 : currentSlider - 1
		);
	};

	const handleNext = () => {
		setCurrentSlider(
			currentSlider === images.length - 1 ? 0 : currentSlider + 1
		);
	};

	async function fetchImages(getUrl) {
		try {
			setLoading(true);

			const resp = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
			const data = await resp.json();

			if (data) {
				setImages(data);
				setLoading(false);
			}
		} catch (e) {
			setErrorMsg(e.message);
			setLoading(false);
		}
	}

	useEffect(() => {
		if (url !== "") fetchImages(url);
	}, [url]);

	if (loading) {
		return <div>Loading data ! Please Wait</div>;
	}

	if (errorMsg !== null) {
		return <div>Error occurred! {errorMsg}</div>;
	}

	return (
		<div className="container">
			<BsArrowLeftCircleFill
				onClick={handlePrevious}
				className="arrow arrow-left"
			/>

			{images && images.length
				? images.map((imageItem, index) => (
						<img
							key={imageItem.id}
							alt={imageItem.download_url}
							src={imageItem.download_url}
							className={
								currentSlider === index
									? "current-image"
									: "current-image hide-current-image"
							}
						/>
				  ))
				: null}
			<BsArrowRightCircleFill
				onClick={handleNext}
				className="arrow arrow-right"
			/>
			<span className="circle-indicators">
				{images && images.length
					? images.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlider(index)}
								className={
									currentSlider === index
										? "current-indicator"
										: "current-indicator inactive-indicator"
								}
							></button>
					  ))
					: null}
			</span>
		</div>
	);
}
