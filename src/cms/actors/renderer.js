import React from "react";
import ReactDOM from "react-dom";
import Application from "../Application.jsx";


const APP_NODE = document.getElementById("app");

export default function renderer(state, dispatch) {
    // Render the application
    ReactDOM.render(<Application state={state} dispatch={dispatch}/>, APP_NODE);
}
