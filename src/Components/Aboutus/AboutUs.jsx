import Overlay from "./Overlay";
import aboutus from "../../assets/images/aboutus.png";
import teamLogo from "../../assets/images/3161.svg";
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
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eveniet est nihil ex, laborum possimus illo totam
						inventore quibusdam tempore voluptate, earum tenetur,
						soluta ullam officiis beatae quasi illum ipsa quos?
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Voluptatibus eos voluptas excepturi recusandae
						obcaecati, cumque nisi! Itaque non similique beatae esse
						velit, neque aut eos cupiditate ratione ipsam maxime ad!
					</p>
				</div>
				<div className="right">
					<img src={teamLogo} alt="" />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
