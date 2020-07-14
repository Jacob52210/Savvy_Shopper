import React from 'react';
import './clearBtn.scss';

export const ClearBtn = (props) => (
	<div className='clear-btn' onClick={props.handleClear}>
		{props.children}
	</div>
);
