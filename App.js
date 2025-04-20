//import logo from '../ui/Logo.svg';
import React from 'react';
import './css/props.css';
import './css/App.css';
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import Home from "./screens/home";
function App() {
  return (
    <div class="main">
      <div>
      <Sidebar /></div>
      <Header /><br /><br /><br />
      <Home />
    </div>
    
  );
}

export default App;
