import logo from './logo.svg';
import {BrowserRouter,Routes,  Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ShopNow from './components/ShopNow';
import Wall from './components/Wall';
import Nameplate from './components/Nameplate';
import Namep from './components/Namep';
import AcraliWallp from './components/AcraliWallp';
import AcraliCar from './components/AcraliCar';
import FramedA from './components/FramedA';
import Xya from './components/Xya';

function App() {
  return (
 
    <>
     <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ShopNow"element={<ShopNow />} />
        <Route path="/Wall"element={<Wall />} />
        <Route path="/Nameplate"element={<Nameplate />} />
        <Route path="/Namep"element={<Namep />} />
        <Route path="/AcraliWallp"element={<AcraliWallp />} />
        <Route path="/AcraliCar"element={<AcraliCar />} />
        <Route path="/FramedA"element={<FramedA />} />
        <Route path="/Xya"element={<Xya />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
   
  );
}


export default App;
