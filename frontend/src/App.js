import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createTodo from "./Components/createTodo";
import editTodo from "./Components/editTodo";
import todosList from "./Components/todosList";
import logo from "./logohand.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="https://facebook.com"
              target="_blank"
            >
              <img src={logo} width="30" height="30" alt="facebook.com" />
            </a>
            <Link to="/" className="navbar-brand">
              MERN-Stack Todo App
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="nav-link" to="/create">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={todosList} />
          <Route path="/edit/:id" component={editTodo} />
          <Route path="/create" component={createTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
