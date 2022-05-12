import close from "../../assets/images/arrow.svg";
import "../../assets/scss/overlay.scss";
const Overlay = ({
	image,
	name,
	role,
	email,
	phone,
	github,
	linkedIn,
	handleClick,
	isActive,
	opposite = false,
}) => {
	return (
		<div
			className={
				"overlay" +
				(isActive ? " active" : "") +
				(opposite ? " opposite" : "")
			}
		>
			<img src={close} onClick={handleClick} />
			<div>
				<img src={image} alt="" />
				<h1>{name}</h1>
				<p>{role}</p>
			</div>
			<div className="social-media">
				<a href={`mailto:${email}`}>Email</a>
				<a href={`tel:${phone}`}>Phone Number</a>
				<a href={github}>GitHub</a>
				<a href={linkedIn}>LinkedIn</a>
			</div>
		</div>
	);
};

export default Overlay;
