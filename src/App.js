import './App.css';
import React, {useState} from 'react'
import { Route, Switch  } from 'react-router-dom';

import Timetable from './pages/timetable/timetable.js'
import HomePage from './pages/homepage/homepage';

//WHEN ON WIFI DOWNLOAD SCSS AND REACT-ROUTER

function App() {
  
  return (
      <Switch>
        <Route path='/' component={Timetable}/>
      </Switch>
  );
}

export default App;