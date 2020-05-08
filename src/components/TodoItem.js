import React, { Component } from 'react';
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = () => {
        console.log(this.props);
    }

    render() {
        //? destructure the value from top (app.js)
        const { id, title } = this.props.todo; 
        return (
            <div style={this.getStyle()}>
                <p> 
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title } 
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}> x </button>
                </p>
            </div>
        )
    }
}

//? Check Prop-types
TodoItem.propTypes = { //? The first should be the name of the class
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
