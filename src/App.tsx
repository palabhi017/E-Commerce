// import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer"
import AllRoutes from './Pages/AllRoutes';
import SmallNavbar from './Components/Navbar/SmallNavbar';

function App() {
  return (
    <div className="App">
       <div className="App">
      <div className="big">
        <Navbar />
      </div>
      <div className="small">
        <SmallNavbar />
      </div>
      {/* <GoOnTop /> */}
      <AllRoutes />
      <Footer />
    </div>
    </div>
  );
}

export default App;
