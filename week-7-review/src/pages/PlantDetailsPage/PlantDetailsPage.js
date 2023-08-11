import PlantList from "../../components/PlantList/PlantList.js";
import PlantDescription from "../../components/PlantDescription/PlantDescription.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";


function PlantDetailsPage() {
    const API_KEY = "?api_key=123"
    const BASE_URL = "https://week-7-plants.onrender.com/plants";
    let navigate = useNavigate();
    // const [currentPlant, setCurrentPlant] = useState("");
    const [plantData, setPlantData] = useState(null);
    const { plantId } = useParams();

    useEffect(() => {
        axios.get(BASE_URL + API_KEY)
            .then((response) => {
                setPlantData(response.data);
            })
    }, [plantId]);

    // useEffect(() => {
    //     if (!plantId) {
    //         navigate(`/plants/${plantData[0].id}`)
    //     }
    // }, [plantId])

    if (!plantData) {
        return <p>Loading...</p>;
    }

    if (!plantId) {
        return <Navigate to={`/plants/${plantData[0].id}`} />
    }

    return (
        <div className="app">
            < PlantList allPlants={plantData.filter(plants => (plants.id !== plantId))} />
            < PlantDescription />
        </div>
    )
}



export default PlantDetailsPage;