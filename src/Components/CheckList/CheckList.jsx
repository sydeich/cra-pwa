import { Link } from "react-router-dom";
import "../../assets/scss/checklist.scss";
import Category from "../Categories/Category";
import Database from "../../Database";
import { useState, useEffect } from "react";

const CheckList = ({
	id,
	database,
	setChecklists,
	setCurrentChecklist,
	setIsPopupActive,
}) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const stuff = async () => {
			try {
				if (!id) return;
				const data = await Database.Checklists.getById({
					db: database,
					id,
				});
				setData(data);
			} catch (error) {
				console.log("Database is not ready.");
			}
		};
		stuff();
	}, [database, id]);

	const handleClick = async () => {
		await Database.Checklists.delete({ db: database, id: id });
		const checklists = await Database.Checklists.all({ db: database });
		setChecklists(checklists);
		setCurrentChecklist(null);
		setData(null);
		setIsPopupActive(checklists.length ? false : true);
	};

	if (data == null) {
		return <></>;
	}

	return (
		<div className="checklist">
			<div className="top">
				<div className="left">
					<h1>{data.title}</h1>
				</div>
				<div className="right">
					<Link to="/">QR code</Link>
					<button>Reset</button>
					<button
						style={{ backgroundColor: "#D11A2A", marginRight: 0 }}
						onClick={handleClick}
					>
						Delete
					</button>
				</div>
			</div>
			<div className="bottom">
				<Category title="Auto"></Category>
				<Category title="Teleop"></Category>
			</div>
		</div>
	);
};

export default CheckList;
