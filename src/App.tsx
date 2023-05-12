import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AllRoutes/>
        <Navbar/>
    </div>
  );
}

export default App;
