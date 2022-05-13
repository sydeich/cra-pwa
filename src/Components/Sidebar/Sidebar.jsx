import { useState, useEffect } from "react";
import plus from "../../assets/images/plus.svg";
import arrow from "../../assets/images/arrow.svg";
import "../../assets/scss/sidebar.scss";
import NewChecklistPopup from "../Popups/NewChecklistPopup";
import CircleChecklist from "../CheckList/CircleChecklist";
import Database from "../../Database";

const Sidebar = ({
	database,
	currentChecklist,
	setCurrentChecklist,
	isSidebarActive,
	setSidebarActive,
	checklists,
	setChecklists,
	isPopupActive,
	setIsPopupActive,
}) => {
	const handleClick = () => {
		setIsPopupActive(!isPopupActive);
	};
	const handleSidebarClick = () => {
		setSidebarActive(!isSidebarActive);
	};
	useEffect(() => {
		const stuff = async () => {
			try {
				const checklists = await Database.Checklists.all({
					db: database,
				});
				setChecklists(checklists);
				if (checklists.length == 0) {
					setIsPopupActive(true);
				} else {
					setCurrentChecklist(checklists[0].id);
				}
			} catch (error) {
				console.log("The database is not ready yet.");
			}
		};
		stuff();
	}, [database]);
	return (
		<>
			{isPopupActive ? (
				<NewChecklistPopup
					handleClick={handleClick}
					database={database}
					checklists={checklists}
					setChecklists={setChecklists}
				></NewChecklistPopup>
			) : (
				<></>
			)}

			<div
				className={
					"sidebar-wrapper" + (isSidebarActive ? " active" : "")
				}
			>
				<div className="sidebar">
					<div onClick={handleClick} className="top">
						<img src={plus} alt="" />
					</div>
					<div className="bottom">
						{checklists.map((checklist) => {
							return (
								<CircleChecklist
									title={checklist.title}
									id={checklist.id}
									setCurrentChecklist={setCurrentChecklist}
									currentChecklist={currentChecklist}
								></CircleChecklist>
							);
						})}
					</div>
				</div>

				<div
					onClick={handleSidebarClick}
					className={
						"side-sidebar" + (checklists.length ? "" : " empty")
					}
				>
					<img src={arrow} />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
