import React from 'react';

import './nav.scss';

function Nav() {
	function recipe(e) {
		e.preventDefault();
		alert('Recipe Search');
	}
	function calc(e) {
		e.preventDefault();
		alert('Calculator App');
	}
	function todo(e) {
		e.preventDefault();
		alert('Todo List');
	}
	function shop(e) {
		e.preventDefault();
		alert('Shopping List');
	}
	function home(e) {
		e.preventDefault();
		alert('Home Page');
	}

	return (
		<div className='nav'>
			<i onClick={recipe} className='fas fa-utensils fa-2x'></i>
			<i onClick={calc} className='fas fa-calculator fa-2x'></i>
			<i onClick={todo} className='fas fa-list fa-2x'></i>
			<i onClick={shop} className='fas fa-shopping-cart fa-2x'></i>
			<i onClick={home} className='fas fa-home fa-4x'></i>
		</div>
	);
}

export default Nav;
