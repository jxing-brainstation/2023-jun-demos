import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function PlantDescription(props) {
    const BASE_URL = "https://week-7-plants.onrender.com";
    const API_KEY = "?api_key=123"
    const { plantId } = useParams();

    const [individualPlantData, setIndividualPlantData] = useState(null);

    //API url to get details about a specific plant: 
    //http://localhost:8080/plants/1?api_key=123
    //http://localhost:8080/plants/1
    useEffect(() => {
        if (plantId) {
            axios.get(BASE_URL + "/plants/" + plantId + API_KEY)
                .then((response) => {
                    setIndividualPlantData(response.data)
                })
        }
    }, [plantId])

    if (!individualPlantData) {
        return <p> Loading...</p>;
    }

    return (
        <div className="selectedPlant">
            <h1>{individualPlantData.name}</h1>
            <img className="selected-plant__image" src={individualPlantData.image_url} />
            <h2> {individualPlantData.type}</h2>
            <p> This plant should be watered every {individualPlantData.water_frequency} days.</p>
        </div>
    )
};

export default PlantDescription;


/*
What props does plant description use? Should we change it?
Where do we make the axios call to get details for an individual plant?

"id": "2",
"name": "Spiky",
"type": "Cactus",
"water_frequency": 30,
"image_url": "https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"last_watered": 1619300225646

*/