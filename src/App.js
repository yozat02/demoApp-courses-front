import React from "react";
import "./App.css";
import { ListCourses } from "./components/ListCourses";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Course  from './components/Course';


function App() {
  return (
    <div className="App">
      <h2>
        <a href="/" style={{ textDecoration: "none" }}>
          My Courses
        </a>
      </h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <ListCourses />
          </Route>
          <Route exact path="/course/:id">
            <Course />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
