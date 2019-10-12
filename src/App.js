import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Todos from './components/Todos';
import AddTodo from './components/addTodo';
import About from './components/pages/about';
import uuid from 'uuid';


class App extends Component {
  state = {
    todos: []
  } 

  //changing state of the todo item!!!
  markComplete = ( id ) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if( todo.id === id ){
        todo.completed = !todo.completed
        //console.log(todo.id,todo.completed)
      }
      
      return todo;
    }) });
  }

  //Delete ToDo item
  delTodo = (id) => {
    this.setState({ todos : [...this.state.todos.filter(todo => todo.id!==id)]});
  }

  //Add ToDo Item
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render(){
    return (
      <Router>
        <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render= {props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} 
              markComplete={this.markComplete}
              delTodo={this.delTodo} 
          />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
        </div>
      </Router>
    );
  }

}

export default App;
