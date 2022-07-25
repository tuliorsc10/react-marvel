import React, { Fragment } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pesquisa from "./pages/Home";
import SerieMarvel from "./pages/Marvel/indexMarvel";
import Sobre from "./pages/Sobre/sobre";


function Router() {
    return(
    <BrowserRouter>
    <Fragment>
        <Routes>
            <Route exact path="/" element={<Pesquisa/>}/>
            <Route exact path="/sobre" element={<Sobre/>}/>
            <Route path="/serie-marvel" element={<SerieMarvel/>}/>
        </Routes>
    </Fragment>
    </BrowserRouter>
    )
}

export default Router;