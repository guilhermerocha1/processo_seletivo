import React from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Route path="/">
        <Redirect from="/" to="/login" />
      </Route>
      <Route path="/login">{Login}</Route>
    </>
  );
}

export default App;
