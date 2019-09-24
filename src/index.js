import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import Homepage from "./homepage";
import  Login  from "./login";
import { Register } from "./register";


function App() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/homepage" component={Homepage} />
            <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );

registerServiceWorker();