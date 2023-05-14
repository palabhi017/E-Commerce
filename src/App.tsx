import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer"
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AllRoutes/>
        <Footer/>
    </div>
  );
}

export default App;
