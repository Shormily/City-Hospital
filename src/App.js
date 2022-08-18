import './App.css';
import Footer from "./Pages/Home/Footer/Footer";
import Navbars from "./Pages/Home/Navbars/Navbars"; 
import Home from "./Pages/Home/Home" ;
import Contact from "./Pages/Home/Contact/Contact" ;
import About from "./Pages/Home/About/About" ;
import { Route, Routes } from 'react-router-dom';
import Service from './Pages/Service/Service';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import Updateuser from './Pages/Updateuser/Updateuser';
import CardShipping from './Pages/CardShipping/CardShipping';
import Order from './Pages/Order/Order';

function App() {
  return (
    <>
    <AuthProvider>
    <Navbars/>
    <Routes>
      
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/addservice" element={<AddService />}/>
    <Route path="/order" element={<Order />}/>
    
    <Route path="/cardShipping/:id" element={<CardShipping />}/>
    <Route path="/manageservices" element={<ManageServices />}/>
    <Route path="/service/update/:id" element={<Updateuser />}/>
    <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>}/>
    <Route path="/service" element={<PrivateRoute><Service /></PrivateRoute>}/>
    <Route path="/signup" element={<SignUp />}/>
    </Routes>
    <Footer/>
    </AuthProvider>
    
    </>
  );
}

export default App;
