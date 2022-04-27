import { Link } from "react-router-dom";
import "../../assets/scss/checklist.scss";
import Category from "../Categories/Category";

const CheckList = () => {
    return (
        <div className="checklist">
            <div className="top">
                <div className="left">
                    <h1>Match Preparation</h1>
                </div>
                <div className="right">
                    <Link to="/">QR code</Link>
                    <button>Reset</button>
                    <button
                        style={{ backgroundColor: "#D11A2A", marginRight: 0 }}
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
