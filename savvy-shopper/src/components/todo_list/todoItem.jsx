import React, { Component } from 'react';
import '../shopping_list/shoppingItem.scss';
export default class TodoItem extends Component {
	render() {
		const { todo } = this.props;

		return (
			<div className='todo-container' onClick={this.toggleTodo}>
				<h5 className={'shopping-item' + (todo.completed ? ' completed' : '')}>{todo.text}</h5>
			</div>
		);
	}

	toggleTodo = () => {
		this.props.updateTodoFn(this.props.todo);
	};
}
// Inspired by PortEXE. URL: https://www.youtube.com/watch?v=ZcD5rJKm3Lk&t=2060s
