import Database from "../../Database";
import Property from "../Properties/Property";
import NewPropertyPopup from "../Popups/NewPropertyPopup";
import { useEffect, useState } from "react";

const Category = ({
	title,
	checklist,
	id,
	database,
	setCategories,
	categories,
	reset,
}) => {
	const [isPopupActive, setIsPopupActive] = useState(false);
	const [properties, setProperties] = useState([]);
	useEffect(() => {
		const stuff = async () => {
			try {
				const properties = (
					await Database.Properties.all({ db: database })
				).filter((property) => property.category === id);
				setProperties(properties);
			} catch (error) {
				console.log("Database is not ready yet");
			}
		};
		stuff();
	}, [database]);
	const togglePopup = () => {
		setIsPopupActive(!isPopupActive);
	};
	const handleDelete = async () => {
		const isOk = window.confirm(
			`Are you sure you wanna delete category "${title}"?`
		);
		if (!isOk) return;
		await Database.Categories.delete({
			db: database,
			id,
		});
		setCategories(categories.filter((category) => category.id !== id));
	};
	return (
		<div className="category">
			{isPopupActive && (
				<NewPropertyPopup
					category={id}
					database={database}
					handleClick={togglePopup}
					properties={properties}
					setProperties={setProperties}
				/>
			)}
			<div className="top">
				<h1>{title}</h1>
				<button onClick={handleDelete}>Delete</button>
			</div>
			<div className="bottom">
				{properties.map((property) => (
					<Property
						{...property}
						key={property.id}
						database={database}
						properties={properties}
						setProperties={setProperties}
						reset={reset}
					/>
				))}
				<div className="property new-property" onClick={togglePopup}>
					<h2>New property</h2>
				</div>
			</div>
		</div>
	);
};

export default Category;
