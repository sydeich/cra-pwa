const CircleChecklist = ({
	id,
	title,
	setCurrentChecklist,
	currentChecklist,
}) => {
	const handleClick = () => {
		setCurrentChecklist(id);
	};
	return (
		<div
			onClick={handleClick}
			className={"picklist" + (currentChecklist == id ? " active" : "")}
		>
			<h1>{title.split("")[0].toUpperCase()}</h1>
		</div>
	);
};

export default CircleChecklist;
