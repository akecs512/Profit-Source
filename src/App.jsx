import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div><Footer /></div>
      <div><Navbar /></div>
      
      <Outlet />

    
    </>
  );
}

export default App;
