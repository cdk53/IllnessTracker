import React from 'react';
import './App.css';
import MenuBar from './menu/MenuBar.js';
import DiseaseSearch from './search/DiseaseSearch.js';
import SymptomSearch from './search/SymptomSearch.js';

// These constants will track which panel is being shown
const DISEASE_SEARCH = 1;
const SYMPTOM_SEARCH = 2;

class App extends React.Component {
    constructor(props) {
        super(props);
        // Set state to default to disease search page
        this.state = {activePanel: DISEASE_SEARCH};
        // Bind functions to App class
        this.changePanel = this.changePanel.bind(this);
    }

    changePanel(input) {
        this.setState({activePanel: input});
    }

    /* displayHandler() will check the current state of the application (activePanel)
     * and return the component of the panel that is to be displayed
     */
    displayHandler() {
        if(this.state.activePanel == DISEASE_SEARCH){
            return (<DiseaseSearch/>);
        }
        else if (this.state.activePanel == SYMPTOM_SEARCH)
        {
            return (<SymptomSearch/>)
        }
    }

    render() {
        return (
          <div className="container-fluid noSpacing">
              <div className="row">
                  <div className="col-12">
                      {/* Here I am calling an instance of the MenuBar class (from MenuBar.js) */}
                      <MenuBar selectionHandler={this.changePanel} />
                      {this.displayHandler()}
                  </div>
              </div>
          </div>
        );
    }
}

export default App;