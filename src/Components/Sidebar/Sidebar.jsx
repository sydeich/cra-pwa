import { useState, useEffect } from "react";
import plus from "../../assets/images/plus.svg";
import arrow from "../../assets/images/arrow.svg";
import "../../assets/scss/sidebar.scss";
import NewChecklistPopup from "../Popups/NewChecklistPopup";
import CircleChecklist from "../CheckList/CircleChecklist";
import Database from "../../Database";

const Sidebar = ({ database, currentChecklist, setCurrentChecklist }) => {
    const [isActive, setActive] = useState(false);
    const [checklists, setChecklists] = useState([]);
    const handleClick = () => {
        setActive(!isActive);
    };
    const [isSidebarActive, setSidebarActive] = useState(false);
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
            } catch (error) {
                console.log("The database is not ready yet.");
            }
        };
        stuff();
    }, [database]);
    return (
        <>
            {isActive ? (
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
