import React from "react";

import {Switch, Route, withRouter} from "react-router-dom";

import axios from "axios";
import "antd/dist/antd.css";
import "./App.css";

import BasePage from "./components/Base";
import {PageNotFoundPage} from "./components/404";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;


const App = () => {

    return (
        <div className="main-window">
            <Switch>
                <Route
                    exact
                    path="/"
                    component={BasePage}
                />

                <Route component={PageNotFoundPage}/>
            </Switch>
        </div>
    );

}

export default withRouter(App);


