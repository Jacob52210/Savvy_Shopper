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
					For meal ideas, check out our <i className='fas fa-utensils' /> page!
				</p>
				<ListItems updateItemFn={this.updateItem} items={this.state.items} />
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
		if (document.getElementById('addItemInput').value.trim() === '') {
			return;
		} else {
			await this.setState({
				items: [
					...this.state.items,
					{
						text: item,
						key: Date.now(),
						completed: false,
					},
				],
			});
		}
		localStorage.setItem('items', JSON.stringify(this.state.items));
	};

	updateItem = async (item) => {
		const newItems = this.state.items.map((_item) => {
			if (item === _item)
				return {
					text: item.text,
					key: item.key,
					completed: !item.completed,
				};
			else return _item;
		});
		await this.setState({ items: newItems });
		localStorage.setItem('items', JSON.stringify(this.state.items));
	};

	clearItems = (items) => {
		var newList = this.state.items;
		newList.splice(items);
		this.setState({ items: newList });
		localStorage.removeItem('items');
	};
}
// Inspired by PortEXE. URL: https://www.youtube.com/watch?v=ZcD5rJKm3Lk&t=2060s
