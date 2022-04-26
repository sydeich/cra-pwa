import { Link } from "react-router-dom";
import "../../assets/scss/checklist.scss";

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
				<div className="category">
					<div className="top">
						<h1>Category</h1>
					</div>
					<div className="bottom">
						<div className="property">
							<h2>Limelight cover</h2>
						</div>
						<div className="property">
							<h2>Limelight cover</h2>
						</div>
						<div className="property">
							<h2>Limelight cover</h2>
						</div>
						<div className="property">
							<h2>Limelight cover</h2>
						</div>
					</div>
				</div>
				<div className="category">
					<div className="top">
						<h1>Category</h1>
					</div>
					<div className="bottom">
						<div className="property">
							<h2>Limelight cover</h2>
						</div>
						<div className="property">
							<h2>Limelight cover</h2>
						</div>
						<div className="property">
							<h2>Limelight cover</h2>
						</div>
						<div className="property">
							<h2>Limelight cover</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckList;
