import React from 'react';
import './App.css';
import MenuBar from './menu/MenuBar.js';
import DiseaseSearch from './search/DiseaseSearch.js';

function App() {
  return (
    <div className="container-fluid noSpacing">
        <div className="row">
            <div className="col-12">
                {/* Here I am calling an instance of the MenuBar class (from MenuBar.js) */}
                <MenuBar/>
                <DiseaseSearch/>
            </div>
        </div>
    </div>
  );
}

export default App;