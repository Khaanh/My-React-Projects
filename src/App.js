// import logo from "./logo.svg";
// import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
	return (
		<div className="App">
			{/* Accordion component */}
			{/* <Accordion /> */}

			{/* Random color component */}
			{/* <RandomColor /> */}

			{/* Star rating */}
			{/* <StarRating numberOfStars={10} /> */}

			{/* Imageslider */}
			<ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
		</div>
	);
}

export default App;
