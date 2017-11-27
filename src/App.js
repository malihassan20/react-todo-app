import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var todos = [
    {
        todoTitle: 'Title 1',
        todoResponsible: 'Responsible 1',
        todoDescription: 'Description 1',
        todoPriority: 'low'
    },
    {
        todoTitle: 'Title 2',
        todoResponsible: 'Responsible 2',
        todoDescription: 'Description 2',
        todoPriority: 'low'
    },
    {
        todoTitle: 'Title 3',
        todoResponsible: 'Responsible 3',
        todoDescription: 'Description 3',
        todoPriority: 'high'
    },
    {
        todoTitle: 'Title 4',
        todoResponsible: 'Responsible 4',
        todoDescription: 'Description 4',
        todoPriority: 'medium'
    }
];

class App extends Component {

    constructor(props){
        super(props);

        this.state={
            todos
        };
    }

    render() {
        return (
            <div className="container">
                <h4>Todo Count:</h4>
            </div>
        );
    }
}

export default App;
