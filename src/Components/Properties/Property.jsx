import { useState } from "react";
import Database from "../../Database";

const Property = ({ title, id, active, database }) => {
	const [isActive, setActive] = useState(active);
	// let className = "property";
	// if (isActive == true) {
	//     className = "property" + " active";
	//     className += " active";
	// }
	const handleClick = async () => {
		// if (isActive == true) {
		//     setActive(false);
		// } else {
		//     setActive(true);
		// }
		await Database.Properties.update({
			db: database,
			id: id,
			newData: {
				active: !active,
			},
		});
		setActive(!isActive);
	};
	return (
		<div
			onClick={handleClick}
			className={"property" + (isActive ? " active" : "")}
		>
			<h2>{title}</h2>
		</div>
	);
};

export default Property;
