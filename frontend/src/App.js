import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import NewScreen from './Screens/NewScreen';
import { BrowserRouter, Route } from 'react-router-dom';
import InitScreen from './Screens/InitScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <main className="main">
            <div className="content">
            <Route path="/new" component={NewScreen}/>
            <Route path="/init" component={InitScreen}/>
            <Route path="/home" component={HomeScreen}/>
            <Route path="/" exact={true} component={HomeScreen}/>
            </div>
           
        </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
