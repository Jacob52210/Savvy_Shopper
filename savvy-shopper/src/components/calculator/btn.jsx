import React from 'react';
import './btn.scss';

const isOperator = (val) => {
	return !isNaN(val) || val === '.' || val === '=';
};

export const Button = (props) => (
	<div
		className={`button-wrapper ${isOperator(props.children) ? null : 'operator'}`}
		onClick={() => props.handleClick(props.children)}
	>
		{props.children}
	</div>
);
// Inspired by Brice Ayres. URL: https://www.youtube.com/watch?v=KzYUuTiHdiY&t=229s
