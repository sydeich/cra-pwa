import { Link } from "react-router-dom";

const HeaderOptions = () => {
	return (
		<div className="links">
			<Link to="/">Home</Link>
			<Link to="/aboutus">About us</Link>
		</div>
	);
};

export default HeaderOptions;
