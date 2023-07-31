import "./App.scss";
import { useState } from 'react';
import plants from './data/plants.json';
import PlantList from './components/PlantList/PlantList';
import PlantDescription from './components/PlantDescription/PlantDescription';

function App() {
  let [selectedPlantId, setSelectedPlantId] = useState(1);

  function updateId(id) {
    setSelectedPlantId(id);
  }

  let foundPlant = plants.find(plant => plant.id === selectedPlantId);
  /*
    {
      name:'spiky',
      wateringFrequency: 20
    }
  */
  console.log(foundPlant)

  const filteredPlants = plants.filter(plant => plant.id !== selectedPlantId);
  return (
    <div className="app">
      <PlantList
        allPlants={filteredPlants}
        updateId={updateId}
      />
      <PlantDescription
        plantName={foundPlant.name}
        plantType={foundPlant.type}
        plantURL={foundPlant.image_url}
        plantFrequency={foundPlant.water_frequency}
      />
    </div>
  );
}

export default App;
