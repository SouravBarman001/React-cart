import React from "react";
import {
  BrowserRouter as Router,
  Route,Routes,Link 
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';

const App=()=> { 
    
    return(
   <>
     <Router>

          <Link to="/">Home</Link>
          <Link to="/About">About</Link>

        <Routes>
   
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />

        </Routes>
     </Router>
   </>

    )
}
export default App;