import Overlay from "./Overlay";
import aboutus from "../../assets/images/aboutus.png";
import "../../assets/scss/aboutus.scss";
import { useState } from "react";

const AboutUs = () => {
	const [isLeftActive, setIsLeftActive] = useState(false);
	const [isRightActive, setIsRightActive] = useState(false);
	const handleLeftClick = () => {
		setIsLeftActive(!isLeftActive);
		if (isRightActive) {
			setIsRightActive(false);
		}
	};
	const handleRightClick = () => {
		setIsRightActive(!isRightActive);
		if (isLeftActive) {
			setIsLeftActive(false);
		}
	};
	return (
		<div className="aboutus">
			<div className="showoff">
				<img src={aboutus} alt="" />
				<div className="boxes">
					<Overlay
						email="gmail@gmail.com"
						github="asd"
						linkedIn=""
						role="Web Developer"
						name="Sydney Eichenberg"
						phone=""
						handleClick={handleLeftClick}
						isActive={isLeftActive}
					/>
					<Overlay
						email="gmail@gmail.com"
						github="asd"
						linkedIn=""
						role="UI/UX Designer"
						name="Pooria Ahmadi"
						phone=""
						handleClick={handleRightClick}
						isActive={isRightActive}
						opposite={true}
					/>
				</div>
			</div>
			<div className="description">
				<div className="left">
					<h1>About US</h1>
					<p>hehe</p>
				</div>
				<div className="right">
					<img src="" alt="" />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
