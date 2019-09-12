import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
// initializes the store
const store = configureStore();

// TO share the store amongs the child components of App wrap <App> with <Provider store=store>

render(
<ReduxProvider store={store}>
<Router>
<App />
</Router>
</ReduxProvider>,
document.getElementById("app")
);
