import { useState } from 'react'; 
import './App.css';
import ModelViewer from './components/ModelViewer';

import Table from './assets/screenshots/table.png';
import Ship from './assets/screenshots/ship.png';
import Dinosaur from './assets/screenshots/dinosaur.png';

import { DataModels } from './data/DataModels';

function App() {
  const [modelSelected, setModelSelected] = useState(DataModels[0]);

  const onSelectModel = (linkModelSelected) => {
    setModelSelected(linkModelSelected)
  }

  return (
    <div className="container">
      <ModelViewer modelSelected={modelSelected} />

      <div className="menu">
        <div className="menu_list">
          <div className="table image" onClick={() => onSelectModel(DataModels[0])}>
            <img src={Table} alt="Game table"/>
          </div>
          <div className="ship image" onClick={() => onSelectModel(DataModels[1])}>
            <img src={Ship} alt="Ship"/>
          </div>
          <div className="dinousaur image" onClick={() => onSelectModel(DataModels[2])}>
            <img src={Dinosaur} alt="Dinosaur"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
