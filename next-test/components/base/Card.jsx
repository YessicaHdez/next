import React, { Component } from 'react';
import styled from 'styled-components';
import { todos } from 'C:/Users/Yessica/Documents/Git/next/next-test/todos.json';
import Link from 'next/link'
const StyledSpace = styled.div`
    background-color: #ECE7E6;
    color: black; 
    font-size: 16px;
    padding: 10px;
    margin: 30px;
    width: 200px;
    height: 200px;
    display: inline-block;`
;

const StyledText = styled.text`
    color: blue;
    font-size: 18px;`
;
const StateText = styled.text`
    background-color: yellow;
    font-size: 18px;`
;

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
          <StyledSpace>
            <div className="card mt-4">
              <div className="card-title text-center">
                <h3>{todo.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                 <StateText>{todo.state}</StateText> 
                </span>
                <div className="badge badge-pill badge-danger ml-2">
                  {todo.responsible}
                </div>
              </div>
              <div className="card-body">
                {todo.description}
              </div>
            
            </div>
            <Link href = "/show"><StyledText>MIRAR LA TAREA</StyledText></Link>
          </StyledSpace>
          
        )
      });
  
      // RETURN THE COMPONENTS
      return (  
        <div className="row">
            {todos}
        </div>
      );
  }

}

export default TodoForm;
