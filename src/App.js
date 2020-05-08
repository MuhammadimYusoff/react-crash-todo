import React, { Component } from 'react';
import Todos from "./components/Todos";
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

//? Stylesheets
import './App.css';

//? Foreign Packages
import { uuid } from "uuidv4";

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    ) 
  }


  //?TodoItem State
  state = {
    todos: [
      { id: uuid(), title: 'Take out the Trash', completed: false },
      { id: uuid(), title: 'Dinner with Wife', completed: false },
      { id: uuid(), title: 'Meeting with Boss', completed: false }
  ]
  }

  //! Todo Functions/Methods
  //? Toogle Complete
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) } )
  }

  //? Delete Todo
  delTodo = (id) => {
    this.setState( {todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //?Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(), title, completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
}
