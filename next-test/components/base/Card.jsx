import React, { Component } from 'react';
import  { todos } from 'C:/Users/Yessica/Documents/Git/next-test/next-test/todos.json'


class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
          todos
        }
        
      }

  render() {
    const todos = this.state.todos.map((todo, i) => {
        return (
          <div className="col-md-4" key={i}>
            <div className="card mt-4">
              <div className="card-title text-center">
                <h3>{todo.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {todo.priority}
                </span>
              </div>
              <div className="card-body">
                {todo.description}
              </div>
              <div className="card-footer">
              </div>
            </div>
          </div>
          
        )
      });
  
      // RETURN THE COMPONENT
      return (
      
        <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              Tasks
              <span className="badge badge-pill badge-light ml-2">
                {this.state.todos.length}
              </span>
            </a>
          </nav>
  
          <div className="container">
            <div className="row mt-4">
  
              <div className="col-md-4 text-center">
                 
               
              </div>
  
              <div className="col-md-8">
                <div className="row">
                  {todos}
                </div>
              </div>
            </div>
          </div>
        </div>
     
      );
  }

}

export default TodoForm;
