import React, { Component } from 'react';
import './shoppingItem.scss';
export default class ShoppingItem extends Component {
	render() {
		const { item } = this.props;

		return (
			<div className='item-container' onClick={this.toggleItem}>
				<h5 className={'shopping-item' + (item.completed ? ' completed' : '')}>{item.text}</h5>
			</div>
		);
	}

	toggleItem = () => {
		this.props.updateItemFn(this.props.item);
	};
}
// Inspired by PortEXE. URL: https://www.youtube.com/watch?v=ZcD5rJKm3Lk&t=2060s
