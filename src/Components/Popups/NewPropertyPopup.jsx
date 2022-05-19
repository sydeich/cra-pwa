import plus from "../../assets/images/plus.svg";
import "../../assets/scss/newchecklistpopup.scss";
import { useState } from "react";
import Database from "../../Database";

const NewPropertyPopup = ({
	handleClick,
	database,
	properties,
	setProperties,
	category,
}) => {
	const [title, setTitle] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (title == "") {
			return;
		}
		const result = await Database.Properties.insert({
			db: database,
			category,
			title,
		});
		setProperties([
			...properties,
			{ id: result, title: title, category: category, active: false },
		]);
		handleClick();
	};
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};
	return (
		<div className="dark-matter">
			<div className="new-checklist">
				<div className="top">
					<h1>New Property</h1>
					<img onClick={handleClick} src={plus} alt="" />
				</div>
				<form onSubmit={handleSubmit} className="bottom">
					<h1>Title:</h1>
					<input
						type="text"
						value={title}
						onChange={handleTitleChange}
					/>
					<input type="submit" value="Create" />
				</form>
			</div>
		</div>
	);
};

export default NewPropertyPopup;
