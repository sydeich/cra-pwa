import { useState } from "react";

const Property = ({ title }) => {
    const [isActive, setActive] = useState(false);
    // let className = "property";
    // if (isActive == true) {
    //     className = "property" + " active";
    //     className += " active";
    // }
    const handleClick = () => {
        // if (isActive == true) {
        //     setActive(false);
        // } else {
        //     setActive(true);
        // }
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
