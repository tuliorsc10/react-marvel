import React, { Fragment } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

function Router() {
    return(
    <BrowserRouter>
    <Fragment>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
    </Fragment>
    </BrowserRouter>
    )
}

export default Router;