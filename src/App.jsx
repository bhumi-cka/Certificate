import React from "react";
import Certi from "./Certi";
import Input from "./Input";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

function App() {

    return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Input/>}/>
            <Route path="/certi" element={<Certi/>}/>
        </Routes>
    </BrowserRouter>
    </>)
}

export default App;