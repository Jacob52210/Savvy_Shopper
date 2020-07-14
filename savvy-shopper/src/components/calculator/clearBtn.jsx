import React from 'react';
import './clearBtn.scss';

export const ClearBtn = (props) => (
	<div className='clear-btn' onClick={props.handleClear}>
		{props.children}
	</div>
);
// Inspired by Brice Ayres. URL: https://www.youtube.com/watch?v=KzYUuTiHdiY&t=229s
