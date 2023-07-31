
function PlantDescription(props) {
    return (
        <div className="selectedPlant">
            <h1>{props.plantName}</h1>
            <img className="selected-plant__image" src={props.plantURL} />
            <h2> {props.plantType}</h2>
            <p> This plant should be watered every {props.plantFrequency} days.</p>
        </div>
    )
};

//

export default PlantDescription;