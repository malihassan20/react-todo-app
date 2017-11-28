import React, { Component } from 'react';

class TodoInput extends Component{
    constructor(props){
        super(props);

        this.state = {
            todoTitle: '',
            todoDescription: '',
            todoPriority: 'Low'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            todoTitle: '',
            todoDescription: '',
            todoPriority: 'Low'
        });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset className="uk-fieldset">

                    <legend className="uk-legend">Add New Todo</legend>

                    <div className="uk-margin">
                        <input name="todoTitle"
                                type="text"
                                className="uk-input"
                                id="inputTodoTitle"
                                value={this.state.todoTitle}
                                onChange={this.handleInputChange}
                                placeholder="Title"/>
                    </div>

                    <div className="uk-margin">
                        <textarea name="todoDescription"
                                className="uk-textarea"
                                rows="5"
                                id="inputTodoDesc"
                                value={this.state.todoDescription}
                                onChange={this.handleInputChange}
                        ></textarea>
                    </div>

                    <div className="uk-margin">
                        <select 
                            className="uk-select"
                            name="todoPriority"
                            id="inputTodoPriority"
                            value={this.state.todoPriority}
                            onChange={this.handleInputChange}>

                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Highest</option>
                        
                        </select>
                    </div>

                    <div className="uk-margin">
                        <button type="submit" className="uk-button uk-button-danger">Add Todo</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default TodoInput;
