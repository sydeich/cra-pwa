import { Link } from "react-router-dom";
import "../../assets/scss/checklist.scss";
import Category from "../Categories/Category";
import Database from "../../Database";
import { useState, useEffect } from "react";
import plusSign from "../../assets/images/plus.svg";
import NewCategoryPopup from "../Popups/NewCategoryPopup";

const CheckList = ({
	id,
	database,
	setChecklists,
	setCurrentChecklist,
	setIsPopupActive,
}) => {
	const [data, setData] = useState(null);
	const [isCategoryPopActive, setIsCategoryPopActive] = useState(false);
	const [categories, setCategories] = useState([]);
	const [reset, setReset] = useState(false);
	useEffect(() => {
		const stuff = async () => {
			try {
				if (!id) return;
				const data = await Database.Checklists.getById({
					db: database,
					id,
				});
				setData(data);
				const categories = (
					await Database.Categories.all({ db: database })
				).filter((item) => item.checklist === id);
				setCategories(categories);
			} catch (error) {
				console.log("Database is not ready.");
			}
		};
		stuff();
	}, [database, id]);

	const handleClick = async () => {
		const isOk = window.confirm(
			`Are you sure you wanna delete "${data.title}?"`
		);
		if (!isOk) return;
		await Database.Checklists.delete({ db: database, id: id });
		const checklists = await Database.Checklists.all({ db: database });
		setChecklists(checklists);
		if (checklists.length) {
			setCurrentChecklist(checklists[0].id);
		} else {
			setCurrentChecklist(null);
		}
		setData(null);
		setIsPopupActive(checklists.length ? false : true);
	};

	if (data == null) {
		return <></>;
	}
	const togglePopup = () => {
		setIsCategoryPopActive(!isCategoryPopActive);
	};
	const resetProperties = async () => {
		const isOk = window.confirm(
			`Are you sure? this will uncheck everything within the checklist`
		);
		if (!isOk) return;
		setReset(!reset);
	};

	return (
		<div className="checklist">
			{isCategoryPopActive && (
				<NewCategoryPopup
					categories={categories}
					setCategories={setCategories}
					checklistId={id}
					database={database}
					handleClick={togglePopup}
				></NewCategoryPopup>
			)}
			<div className="top">
				<div className="left">
					<h1>{data.title}</h1>
				</div>
				<div className="right">
					<Link to="/">QR code</Link>
					<button onClick={resetProperties}>Reset</button>
					<button
						style={{ backgroundColor: "#D11A2A", marginRight: 0 }}
						onClick={handleClick}
					>
						Delete
					</button>
				</div>
			</div>
			<div className="bottom">
				{categories.map((category) => (
					<Category
						key={category.id}
						{...category}
						database={database}
						categories={categories}
						setCategories={setCategories}
						reset={reset}
					/>
				))}
				<div className="new-category" onClick={togglePopup}>
					<img src={plusSign} alt="" />
				</div>
			</div>
		</div>
	);
};

export default CheckList;
