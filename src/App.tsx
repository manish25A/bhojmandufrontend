import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Body from './components/Body/Body';
import Footer from './components/Footer/footer';
import 'react-router-dom'
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Header/Navbar/'

function App() {

    return (
        <Router>
            <div className="App">
                 <Navbar/>
                    
            </div>
        </Router>
    );
}

export default App;
