const CircleChecklist = ({ title }) => {
    return (
        <div className="picklist">
            <h1>{title.split("")[0].toUpperCase()}</h1>
        </div>
    );
};

export default CircleChecklist;
