import './App.css';
import Footer from "./Pages/Home/Footer/Footer";
import Navbars from "./Pages/Home/Navbars/Navbars"; 
import Home from "./Pages/Home/Home" ;
import Contact from "./Pages/Home/Contact/Contact" ;
import About from "./Pages/Home/About/About" ;
import { Route, Routes } from 'react-router-dom';
import Service from './Pages/Service/Service';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <>
    <Navbars/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/service" element={<Service />}/>
    <Route path="/signup" element={<SignUp />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
