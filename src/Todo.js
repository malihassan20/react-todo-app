import React, { Component } from 'react';
import TodoInput from './TodoInput';

var todos = [
    {
        todoTitle: 'Title 1',
        todoDescription: 'Description 1',
        todoPriority: 'Low'
    },
    {
        todoTitle: 'Title 2',
        todoDescription: 'Description 2',
        todoPriority: 'Low'
    },
    {
        todoTitle: 'Title 3',
        todoDescription: 'Description 3',
        todoPriority: 'High'
    },
    {
        todoTitle: 'Title 4',
        todoDescription: 'Description 4',
        todoPriority: 'Medium'
    }
];

class Todo extends Component {

    constructor(props){
        super(props);

        this.state={
            todos
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleRemoveTodo(index){
        this.setState({
            todos: this.state.todos.filter(function(e,i){
                return i !== index;
            })
        });
    }

    handleAddTodo(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    render() {
        return (
            <div className="container-fluid" style={{background:'darkseagreen'}}>
                <div className="container">
                    <br/>
                    <button href="#toggle-addTodoForm" className="uk-button uk-button-danger uk-align-right" type="button" uk-toggle="target: #toggle-addTodoForm; animation: uk-animation-fade"><span className="uk-margin-small-right" uk-icon="icon: plus;"></span> Add New</button>
                    <br/><br/><br/>
                    <div className="row">
                        <div id="toggle-addTodoForm" className="uk-card uk-card-default uk-card-body uk-margin-small"><TodoInput onAddTodo={this.handleAddTodo}></TodoInput></div>
                    </div>
                    <div className="row">
                        {this.state.todos.map((todo, index) => 
                            <div className="col-md-3">
                                <div className="uk-card uk-card-default uk-card-body">
                                    <a uk-icon="icon: close;" title="Delete"
                                        onClick={this.handleRemoveTodo.bind(this,index)} />
                                    <div className="uk-card-badge uk-label">{todo.todoPriority}</div>
                                    <h3 className="uk-card-title">{todo.todoTitle}</h3>
                                    <p>{todo.todoDescription}</p>
                                </div>
                                <br/>
                            </div>
                        )}
                    </div>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Todo;
