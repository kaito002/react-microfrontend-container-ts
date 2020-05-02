import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import HomeView from './views/HomeView';
import MicroSectionView from './views/MicroSectionView';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <ol>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/micro-section">Micro Section</NavLink></li>
          </ol>
        </div>
        <Switch>
          <Route path="/micro-section"component={MicroSectionView} />
          <Route path="/" component={HomeView}/>            
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
