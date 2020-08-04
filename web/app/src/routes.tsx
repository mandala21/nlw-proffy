import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Lading from "./pages/Lading";
import ProffysList from "./pages/ProffysList";

export const RD = {
    lading: {path:"/",link:"/"},
    proffys: {path:"/proffys",link:"/proffys"},
}

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path={RD.lading.path} component={Lading} />
            <Route exact path={RD.proffys.path} component={ProffysList} />
        </BrowserRouter>
    )
}

export default Routes;
