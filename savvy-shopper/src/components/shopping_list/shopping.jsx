import React, { Component } from 'react';
import './shopping.scss';
import ListItems from './list-items';

export default class Shopping extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			currentItem: {
				text: '',
				key: '',
			},
		};
		this.handleInput = this.handleInput.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	handleInput(e) {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now(),
			},
		});
	}

	addItem(e) {
		e.preventDefault();
		const newItem = this.state.currentItem;
		console.log(newItem);
		if (newItem.text !== '') {
			const newItems = [...this.state.items, newItem];
			this.setState({
				items: newItems,
				currentItem: {
					text: '',
					key: '',
				},
			});
		}
	}

	render() {
		return (
			<div className='shopping'>
				<header>
					<h1>Shopping List</h1>
					<form className='shopping-form' onSubmit={this.addItem}>
						<input
							type='text'
							className='search-bar'
							placeholder='Add Item'
							value={this.state.currentItem.text}
							onChange={this.handleInput}
						/>
						<button type='submit' className='search-btn'>
							Add
						</button>
					</form>
				</header>
				<div className='list-container'>
					<ListItems items={this.state.items}></ListItems>
				</div>
				<footer></footer>
			</div>
		);
	}
}
