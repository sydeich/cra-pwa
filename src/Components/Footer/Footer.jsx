import { Link } from "react-router-dom";
import "../../assets/scss/footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="left">
				<h1>Checkto</h1>
				<p>
					Copyright 2022 Checkto, made with lots of ☕ and ❤️ by{" "}
					<Link to="/aboutus">Sydney</Link> and{" "}
					<Link to="/aboutus">Pooria</Link>
				</p>
			</div>
			<div className="right">
				<Link to="/aboutus">About us</Link>
			</div>
		</footer>
	);
};

export default Footer;
