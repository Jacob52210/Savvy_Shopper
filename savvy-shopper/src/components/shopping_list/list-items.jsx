import React from 'react';
import './list-items.scss';

export default function ListItems(props) {
	const items = props.items;
	const listItems = items.map((item) => {
		return (
			<div className='list' key='item.key'>
				<p>{item.text}</p>
			</div>
		);
	});
	return <div>{listItems}</div>;
}
