import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Todo = (props) => (
  <tr>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_description}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_responsible}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_priority}
    </td>
    <td>
      <Link to={"/edit/" + props.todo._id}>
        <button className="btn btn-warning">Edit</button>
      </Link>
    </td>
  </tr>
);

class todosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch((err) => console.log(err));
  }

  todoList = () => {
    return this.state.todos.map((todo, i) => {
      return <Todo todo={todo} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <h3>Todos List:</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}

export default todosList;
