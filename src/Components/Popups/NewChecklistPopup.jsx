import plus from "../../assets/images/plus.svg";
import "../../assets/scss/newchecklistpopup.scss";

const NewChecklistPopup = ({ handleClick }) => {
    return (
        <div className="dark-matter">
            <div className="new-checklist">
                <div className="top">
                    <h1>New Checklist</h1>
                    <img onClick={handleClick} src={plus} alt="" />
                </div>
                <div className="bottom">
                    <h1>Title:</h1>
                    <input type="text" />
                    <input type="submit" value="Create" />
                </div>
            </div>
        </div>
    );
};

export default NewChecklistPopup;
