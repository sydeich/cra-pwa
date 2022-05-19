import { useState } from "react";
import Database from "../../Database";
import plusSign from "../../assets/images/plus.svg";

const Property = ({
	title,
	id,
	active,
	database,
	properties,
	setProperties,
	reset,
}) => {
	const [state, setState] = useState(0);
	const onClick = async () => {
		await Database.Properties.update({
			db: database,
			id: id,
			newData: {
				active: state === 0 ? 1 : 0,
			},
		});
		setState(state === 0 ? 1 : 0);
	};
	const handleDelete = async () => {
		const isOk = window.confirm(`Are you sure you wanna delete "${title}"`);
		if (!isOk) return;
		Database.Properties.delete({
			db: database,
			id,
		});
		setProperties(properties.filter((property) => property.id !== id));
	};
	const handleRightClick = async (e) => {
		e.preventDefault();

		if (state === 2) {
			const data = await Database.Properties.getById({
				db: database,
				id,
			});
			setState(data.active);
			return;
		}
		setState(2);
	};

	if (reset && state === 1) {
		setState(0);
		Database.Properties.update({
			db: database,
			id: id,
			newData: {
				active: false,
			},
		});
	}
	return (
		<div
			onClick={onClick}
			onContextMenu={handleRightClick}
			className={
				"property" +
				(state === 1 ? " active" : "") +
				(state === 2 ? " delete" : "")
			}
		>
			<h2>{title}</h2>
			{state === 2 && <img src={plusSign} onClick={handleDelete} />}
		</div>
	);
};

export default Property;
