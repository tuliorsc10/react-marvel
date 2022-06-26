import React, { Fragment } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import SerieMarvel from "./pages/Marvel/indexMarvel";
import Pesquisa from "./pages/Pesquisa";

function Router() {
    return(
    <BrowserRouter>
    <Fragment>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/pesquisa" element={<Pesquisa/>}/>
            <Route path="/serie-marvel" element={<SerieMarvel/>}/>
        </Routes>
    </Fragment>
    </BrowserRouter>
    )
}

export default Router;