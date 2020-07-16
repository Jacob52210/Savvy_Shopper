import React, { Component } from 'react';
import TodoItem from './todoItem';

export default class ListTodos extends Component {
	render() {
		const { todos } = this.props;

		return (
			<div className='list-container'>
				{todos.map((_todo, _index) => {
					return <TodoItem updateTodoFn={this.updateTodo} key={_index} todo={_todo} />;
				})}
			</div>
		);
	}

	updateTodo = (todo) => {
		this.props.updateTodoFn(todo);
	};
}
// Inspired by PortEXE. URL: https://www.youtube.com/watch?v=ZcD5rJKm3Lk&t=2060s
