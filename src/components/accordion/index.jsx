import React, { useState } from "react";
import data from "./data";
import "./style.css";
// single selection
// multiple selection

export default function Accordion() {
	const [selected, setSelected] = useState(null);
	const [enableMultiSelection, setEnableMultiSelection] = useState(false);
	const [multiple, setMultiple] = useState([]);

	function handleSingleSelection(getCurrentId) {
		setSelected(getCurrentId === selected ? null : getCurrentId);
	}

	function handleMultiSelection(getCurrentId) {
		let cpyMultiple = [...multiple];
		const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

		if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
		else cpyMultiple.splice(findIndexOfCurrentId, 1);

		setMultiple(cpyMultiple);
	}

	return (
		<div className="wrapper">
			<button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
				{enableMultiSelection ? (
					<>Enable [Single] Selection</>
				) : (
					<>Enable [Multi] Selection</>
				)}
			</button>
			<div className="accordion">
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div className="item" key={dataItem.id}>
							<div
								onClick={
									enableMultiSelection
										? () => handleMultiSelection(dataItem.id)
										: () => handleSingleSelection(dataItem.id)
								}
								className="title"
							>
								<h3>{dataItem.question}</h3>
								<span
									className={selected ? "icon-plus is-changed" : "icon-plus"}
								></span>
								{selected === dataItem.id ? (
									<span className="icon-plus">-</span>
								) : (
									<span className="icon-plus">+</span>
								)}

								{console.log(multiple)}
							</div>
							{enableMultiSelection
								? multiple.indexOf(dataItem.id) !== -1 && (
										<div className="content">{dataItem.answer}</div>
								  )
								: selected === dataItem.id && (
										<div className="content">{dataItem.answer}</div>
								  )}
						</div>
					))
				) : (
					<div>No data found</div>
				)}
			</div>
		</div>
	);
}
