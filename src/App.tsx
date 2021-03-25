import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/footer';
import 'react-router-dom'
import {BrowserRouter} from "react-router-dom";
import NavBarApp from './components/Header/Navbar';


function App() {

    return (
        <BrowserRouter>

            <div className="App">
             <NavBarApp/>
                {/* <Body>
                </Body> */}

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
