const CheckList = () => {
    return (
        <div className="checklist">
            <div className="top">
                <div className="left">
                    <h1>Match Preparation</h1>
                </div>
                <div className="right">
                    <Link to="/"></Link>
                    <button>Reset</button>
                    <button>Delete</button>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckList;
