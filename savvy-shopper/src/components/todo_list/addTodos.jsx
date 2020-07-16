import React, { Component } from 'react';
import '../shopping_list/shopping.scss';

export default class AddTodos extends Component {
	constructor() {
		super();
		this.state = {
			todo: '',
		};
	}

	render() {
		return (
			<div>
				<form className='search-form' onSubmit={(e) => this.submitTodo(e)}>
					<input
						className='search-bar'
						id='addTodoInput'
						onChange={(e) => this.updadeInput(e)}
						type='text'
						placeholder='Add Todos'
					/>
					<button className='search-btn' type='submit'>
						<i className='fas fa-plus'></i>
					</button>
				</form>
			</div>
		);
	}

	updadeInput = (e) => {
		this.setState({ todo: e.target.value });
	};

	submitTodo = (e) => {
		e.preventDefault();
		this.props.addTodoFn(this.state.todo);
		document.getElementById('addTodoInput').value = '';
	};
}
// Inspired by PortEXE. URL: https://www.youtube.com/watch?v=ZcD5rJKm3Lk&t=2060s
