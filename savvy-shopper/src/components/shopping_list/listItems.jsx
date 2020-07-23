import React, { Component } from 'react';
import ShoppingItem from './shoppingItem';

export default class ListItems extends Component {
	render() {
		const { items } = this.props;

		return (
			<div className='list-container'>
				{items.map((_item, _index) => {
					return (
						<ShoppingItem deleteItemFn={this.deleteItem} updateItemFn={this.updateItem} key={_index} item={_item} />
					);
				})}
			</div>
		);
	}

	updateItem = (item) => {
		this.props.updateItemFn(item);
	};

	deleteItem = (items) => {
		delete this.props.items[1];
	};
}
// Inspired by PortEXE. URL: https://www.youtube.com/watch?v=ZcD5rJKm3Lk&t=2060s
