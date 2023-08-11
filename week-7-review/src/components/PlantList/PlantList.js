import { NavLink } from "react-router-dom";

function PlantList(props) {

    return (
        <div className="plant-list">
            <ul className="plant-list__list">
                {/* <a href=""></a> */}
                <NavLink to="/"><li className="plant-list__item">Home</li></NavLink>
                {props.allPlants.map(plant => {
                    return (
                        <NavLink key={plant.id} to={`/plants/${plant.id}`} >
                            <li className="plant-list__item">{plant.name}</li>
                        </NavLink>
                    )
                })}

            </ul>

        </div>

    )
};

export default PlantList;