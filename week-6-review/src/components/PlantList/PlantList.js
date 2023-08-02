
/*allPlants = [
    {name:"Spiky",
     image: "image.url.com",
     waterFrequency: 20       
    }
]
*/
function PlantList(props) {
    function handlePlantClick(idOfPlantClicked) {
        props.updateId(idOfPlantClicked);
    }

    return (
        <div className="plant-list">
            <ul className="plant-list__list">
                {props.allPlants.map(plant => {
                    return <li className="plant-list__item" onClick={() => handlePlantClick(plant.id)}>{plant.name}</li>

                })}

            </ul>

        </div>

    )
};

export default PlantList;