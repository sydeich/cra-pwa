import plus from "../../assets/images/plus.svg";
import "../../assets/scss/newchecklistpopup.scss";
import { useState } from "react";
import Database from "../../Database";

const NewCategoryPopup = ({
	handleClick,
	database,
	categories,
	setCategories,
	checklistId,
}) => {
	const [title, setTitle] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (title == "") {
			return;
		}
		const result = await Database.Categories.insert({
			db: database,
			title: title,
			checklist: checklistId,
		});
		setCategories([
			...categories,
			{ id: result, title: title, checklist: checklistId },
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
					<h1>New Category</h1>
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

export default NewCategoryPopup;
