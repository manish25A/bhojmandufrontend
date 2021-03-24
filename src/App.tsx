import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import 'react-router-dom'
import {BrowserRouter} from "react-router-dom";


function App() {

    return (
        <BrowserRouter>

            <div className="App">
             <Header/>
                <Body>
                </Body>
            </div>
        </BrowserRouter>
    );
}

export default App;
