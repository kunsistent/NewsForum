import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = "53925f7b47a540eda8a5519460355e9e"
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <SideBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
        <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/india"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/israel"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="il" category="general"/></Route>
          <Route exact path="/usa"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/></Route>
          <Route exact path="/australia"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="au" category="general"/></Route>
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;


