import React, { Component } from 'react';
import './shopping.scss';

export default class AddItems extends Component {
	constructor() {
		super();
		this.state = {
			item: '',
		};
	}

	render() {
		return (
			<div>
				<form className='search-form' onSubmit={(e) => this.submitItem(e)}>
					<input
						className='search-bar'
						id='addItemInput'
						onChange={(e) => this.updadeInput(e)}
						type='text'
						placeholder='Add Items'
					/>
					<button className='search-btn' type='submit'>
						<i className='fas fa-plus'></i>
					</button>
				</form>
			</div>
		);
	}

	updadeInput = (e) => {
		this.setState({ item: e.target.value });
	};

	submitItem = (e) => {
		e.preventDefault();
		this.props.addItemFn(this.state.item);
		document.getElementById('addItemInput').value = '';
	};
}
// Inspired by PortEXE. URL: https://www.youtube.com/watch?v=ZcD5rJKm3Lk&t=2060s
