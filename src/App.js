import React from 'react';
import './App.css';
import MenuBar from './menu/MenuBar';

function App() {
  return (
    <div className="container-fluid reactApp noSpacing">
        <div className="row">
            <div className="col-12">
                {/* Here I am calling an instance of the MenuBar class (from MenuBar.js) */}
                <MenuBar/>
            </div>
        </div>
    </div>
  );
}

export default App;
