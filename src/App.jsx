import './App.css';

import Home from './Home';
import Signup from './Signup';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

const App = () => {

    /* Brand name */
    const brandName = "إشهاروميديا";

    /* Home Component */
    const HomeComponent = <Home brandName={brandName} />;

    return (
        <>
            <div className="loader"></div>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={HomeComponent} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default App;
