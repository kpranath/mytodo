import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Gives style to the Added TO-DO
class TodoItem extends Component {
    getStyle = () => {
        return{
            backgroudColor: 'f4f4f4',
            padding: '10px',
            borderBottom: '2px dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }



  render() {
      const { id, title } = this.props.todo;    //variable to access the state variables easily
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } /> {' '}
        { title }
        <button onClick={ this.props.delTodo.bind(this, id) } style={btnStyle}>x</button>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes={
    todo: PropTypes.object.isRequired
}


const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '0px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
