import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPluginExport from "react-tap-event-plugin";
import App from "./Application";

injectTapEventPluginExport();
ReactDOM.render(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>, document.getElementById("app"));
