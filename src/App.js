import React from "react";
import {
  BrowserRouter as Router,
  Route,Routes,Link 
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';

const App=()=> { 
    
    return(
   <> 
     <Router>

      <Navigation/>
        <Routes>
   
            <Route path='/' element={<Home/>} exact />
            <Route path='/About' element={<About/>} />

        </Routes>
     </Router>
   </>

    )
}
export default App;