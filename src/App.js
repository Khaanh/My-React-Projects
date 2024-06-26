import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreBtn from "./components/load-more-btn";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/treeView";
import menus from "./components/treeView/data";

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
			{/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}

			{/* LoadMoreBtn */}
			{/* <LoadMoreBtn /> */}

			{/* TreeView */}
			{/* <TreeView menus={menus} /> */}

			{/* QR Code Generator */}
			{/* <QrCodeGenerator /> */}

			{/* Light Dark Mode Switch */}
			<LightDarkMode />
		</div>
	);
}

export default App;
