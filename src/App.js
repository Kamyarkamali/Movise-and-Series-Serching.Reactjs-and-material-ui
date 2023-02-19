import React from 'react';

import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Switch,Route} from "react-router-dom"

//Components
import Headere from './components/Headere';
import SimpleBottomNavigation from './components/Headre/MainNav';
import { Container } from '@mui/material';
import Tranding from './components/Pages/Tranding/Tranding';
import Serise from "./components/Pages/Serise/Serise"
import Movise from "./components/Pages/Movise/Movise"
import Searche from "./components/Searche/Searche"


function App(){
  return (
    <BrowserRouter>
    <Headere/>
    <div className='app'>
    <Container>
      <Switch>
        <Route path="/" component={Tranding} exact/>
        <Route path="/serise" component={Serise}/>
        <Route path="/searche" component={Searche}/>
        <Route path="/movies" component={Movise}/>
      </Switch>
    </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
};

export default App;