import React, { Component } from 'react';
import '../shopping_list/shopping.scss';
import ListTodos from './listTodos';
import AddTodos from './addTodos';

export default class Todo extends Component {
	constructor() {
		super();
		this.state = {
			todos: [],
		};
	}

	render() {
		return (
			<div className='shopping-app'>
				<h1>Todo List</h1>
				<AddTodos addTodoFn={this.addTodo} />
				<p>Stay organized.</p>
				<ListTodos updateTodoFn={this.updateTodo} todos={this.state.todos} />
				<button onClick={this.clearTodos} className='clear-btn'>
					Clear
				</button>
				<footer></footer>
			</div>
		);
	}

	componentDidMount = () => {
		const todos = localStorage.getItem('todos');
		if (todos) {
			const savedTodos = JSON.parse(todos);
			this.setState({ todos: savedTodos });
		} else {
		}
	};

	addTodo = async (todo) => {
		await this.setState({
			todos: [
				...this.state.todos,
				{
					text: todo,
					completed: false,
				},
			],
		});
		localStorage.setItem('todos', JSON.stringify(this.state.todos));
	};

	updateTodo = async (todo) => {
		const newTodos = this.state.todos.map((_todo) => {
			if (todo === _todo)
				return {
					text: todo.text,
					completed: !todo.completed,
				};
			else return _todo;
		});
		await this.setState({ todos: newTodos });
		localStorage.setItem('todos', JSON.stringify(this.state.todos));
	};

	clearTodos = () => {
		localStorage.removeItem('todos');
	};
}
// Inspired by PortEXE. URL: https://www.youtube.com/watch?v=ZcD5rJKm3Lk&t=2060s
