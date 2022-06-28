import "./App.css";
import todoData from "./data/todoData";
import { Component } from "react";
import Navbar from "./components/Navbar";
import TodosList from "./components/TodosList";
console.log(todoData);
class App extends Component {
  state = {
    todoData: todoData,
    todoChore: "",
    todoDate: "",
    todoDescription: "",
  };
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      chore: this.state.todoChore,
      date: this.state.todoDate,
      description: this.state.todoDescription,
    };
    console.log(newTodo);
    this.setState({
      todoData: [newTodo, ...this.state.todoData],
      todoChore: "",
      todoDate: "",
      todoDescription: "",
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar />

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todoChore"> Todo Chore</label>
          <input
            type="text"
            value={this.state.todoChore}
            onChange={this.handleChange}
            id="todoChore"
          />

          <label htmlFor="todoDate">Todo Date</label>
          <input
            type="text"
            value={this.state.todoDate}
            onChange={this.handleChange}
            id="todoDate"
          />
          <label htmlFor="todoDescription">Todo Description</label>
          <input
            type="text"
            value={this.state.todoDescription}
            onChange={this.handleChange}
            id="todoDescription"
          />
          <input type="submit" />
        </form>

        <TodosList todo={this.state.todoData} />
      </div>
    );
  }
}

export default App;
