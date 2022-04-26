import plus from "../../assets/images/plus.svg";
import "../../assets/scss/sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
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
    );
};

export default Sidebar;
