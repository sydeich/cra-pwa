import aboutus from "../../assets/images/aboutus.png";

const AboutUs = () => {
    return (
        <div className="aboutus">
            <div className="showoff">
                <img src={aboutus} alt="" />
                <div className="overlay">
                    <div className="left">
                        <div>
                            <h1>Sydney Eichenberg</h1>
                            <p>Software Developer</p>
                        </div>
                        <div className="social-media">
                            <a>Email</a>
                            <a>Phone Number</a>
                            <a>GitHub</a>
                            <a>LinkedIn</a>
                        </div>
                        <div className="right">
                            <div>
                                <h1>Pooria Ahmadi</h1>
                                <p>Designer</p>
                            </div>
                            <div className="social-media">
                                <a>Email</a>
                                <a>Phone Number</a>
                                <a>GitHub</a>
                                <a>LinkedIn</a>
                            </div>
                        </div>
                    </div>
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

export default aboutUs;
