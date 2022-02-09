import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Lecture11 from "./11-Lecture/Lecture11";
import Lecture12 from "./12-Lecture/Lecture12";
import Lecture13 from "./13-Lecture/Lecture13";

function App() {

    return (
        <Router>
            <div className="flex" style={{height: '100vh', flexDirection: 'column'}}>

                {/*<Lecture09/>*/}
                {/*<Lecture10/>*/}

                {/*<Routes>*/}
                {/*    <Route path="*" element={<Lecture11/>}/>*/}
                {/*</Routes>*/}

                {/*<Lecture12/>*/}
                <Lecture13/>
            </div>
        </Router>
    );
}

export default App;
