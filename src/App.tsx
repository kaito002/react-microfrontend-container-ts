import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import HomeView from './views/HomeView';
import MicroSectionView from './views/MicroSectionView';
import "./index.css";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <NavLink to="/">Home</NavLink>
          </a>
          <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <NavLink to="/micro-section/10">Micro Section</NavLink>
          </a>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
       <Header />
        <Switch>
          <Route path="/micro-section" component={MicroSectionView} />
          <Route path="/" component={HomeView}/>            
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
