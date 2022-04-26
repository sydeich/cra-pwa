import "../../assets/scss/header.scss";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
    return (
        <header>
            <div className="left">
                <h1>Checkto</h1>
                <HeaderOptions></HeaderOptions>
            </div>
            <div className="right"></div>
        </header>
    );
};

export default Header;
