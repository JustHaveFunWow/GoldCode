import App from "../containers/App/AppContainer"
import {Switch, Route} from 'react-router-dom'
import React from "react";

const AppRouteSwitch = () => (
    <Switch>
        <Route exact path='/' component={App}/>
    </Switch>
);
var indexRoutes = [

    {path: "/", name: "index", component: App}
];

export default AppRouteSwitch;