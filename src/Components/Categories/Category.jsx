import Property from "../Properties/Property";

const Category = ({ title }) => {
    return (
        <div className="category">
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <Property title="Limelight cover"></Property>
                <Property title="Limelight cover"></Property>
                <Property title="Limelight cover"></Property>
                <Property title="Limelight cover"></Property>
            </div>
        </div>
    );
};

export default Category;
