import React, { Component } from 'react';
import './shopping.scss';
import ListItems from './listItems';
import AddItems from './addItems';

export default class Shopping extends Component {
	constructor() {
		super();
		this.state = {
			items: [],
		};
	}

	render() {
		return (
			<div className='shopping-app'>
				<h1>Shopping List</h1>
				<AddItems addItemFn={this.addItem} />
				<p>
					For meal ideas, check out our <i className='fas fa-utensils'></i> page!
				</p>
				<ListItems deleteItemFn={this.deleteItem} updateItemFn={this.updateItem} items={this.state.items} />
				<button onClick={this.clearItems} className='clear-btn'>
					Clear
				</button>
				<footer></footer>
			</div>
		);
	}

	componentDidMount = () => {
		const items = localStorage.getItem('items');
		if (items) {
			const savedItems = JSON.parse(items);
			this.setState({ items: savedItems });
		} else {
		}
	};

	addItem = async (item) => {
		await this.setState({
			items: [
				...this.state.items,
				{
					text: item,
					completed: false,
				},
			],
		});
		localStorage.setItem('items', JSON.stringify(this.state.items));
	};

	deleteItem = async (item) => {
		await this.setState({
			item: [],
		});
		localStorage.removeItem('items', JSON.stringify(this.state.item));
	};

	updateItem = async (item) => {
		const newItems = this.state.items.map((_item) => {
			if (item === _item)
				return {
					text: item.text,
					completed: !item.completed,
				};
			else return _item;
		});
		await this.setState({ items: newItems });
		localStorage.setItem('items', JSON.stringify(this.state.items));
	};

	clearItems = () => {
		localStorage.removeItem('items');
	};
}
// Inspired by PortEXE. URL: https://www.youtube.com/watch?v=ZcD5rJKm3Lk&t=2060s
