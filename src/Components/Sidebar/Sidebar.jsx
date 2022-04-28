import { useState } from "react";
import plus from "../../assets/images/plus.svg";
import arrow from "../../assets/images/arrow.svg";
import "../../assets/scss/sidebar.scss";
import NewChecklistPopup from "../Popups/NewChecklistPopup";

const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive(!isActive);
    };
    const [isSidebarActive, setSidebarActive] = useState(false);
    const handleSidebarClick = () => {
        setSidebarActive(!isSidebarActive);
    };
    return (
        <>
            {isActive ? (
                <NewChecklistPopup
                    handleClick={handleClick}
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
                        <div className="picklist">
                            <h1>A</h1>
                        </div>
                        <div className="picklist">
                            <h1>B</h1>
                        </div>
                        <div className="picklist">
                            <h1>C</h1>
                        </div>
                        <div className="picklist">
                            <h1>D</h1>
                        </div>
                        <div className="picklist">
                            <h1>E</h1>
                        </div>
                    </div>
                </div>

                <div onClick={handleSidebarClick} className="side-sidebar">
                    <img src={arrow} />
                </div>
            </div>
        </>
    );
};

export default Sidebar;
