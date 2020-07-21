import React, { Component } from 'react';
import './shoppingItem.scss';
export default class ShoppingItem extends Component {
	render() {
		const { item } = this.props;

		return (
			<div className='item-container'>
				<h5 onClick={this.toggleItem} className={'shopping-item' + (item.completed ? ' completed' : '')}>
					{item.text}
				</h5>
				<i onClick={this.deleteItem} className='fas fa-trash-alt'></i>
			</div>
		);
	}

	deleteItem = () => {
		this.props.deleteItemFn(this.props.item);
	};

	toggleItem = () => {
		this.props.updateItemFn(this.props.item);
	};
}
// Inspired by PortEXE. URL: https://www.youtube.com/watch?v=ZcD5rJKm3Lk&t=2060s
