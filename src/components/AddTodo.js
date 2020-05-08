import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" name="title" placeholder="Add Todo..." style={{flex: '10', padding: '5px'}} value={this.state.title} onChange={this.onChange} />
                <input type="submit" value="submit" className="btn" style={{flex: '1'}} />
            </form>
        )
    }

    //? AddTodo State
    state = {
        title: ''
    }

    //? Methods
    onChange = (e) => this.setState({title: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }


}
