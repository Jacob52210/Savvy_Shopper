import React from 'react';
import Greeting from '../greeting/greeting';
import './nav.scss';
import Calc from '../calculator/calc';
import Shopping from '../shopping_list/shopping';
import Recipe from '../recipe/recipe';
import Todo from '../todo_list/todo';

function Nav() {
	const [page, setPage] = React.useState('Greeting');

	return (
		<div>
			{page === 'Recipe' ? (
				<Recipe />
			) : page === 'Calc' ? (
				<Calc />
			) : page === 'Todo' ? (
				<Todo />
			) : page === 'Shopping' ? (
				<Shopping />
			) : (
				<Greeting />
			)}
			<div className='nav'>
				<i onClick={() => setPage('Recipe')} className='fas fa-utensils fa-2x'></i>
				<i onClick={() => setPage('Calc')} className='fas fa-calculator fa-2x'></i>
				<i onClick={() => setPage('Todo')} className='fas fa-list fa-2x'></i>
				<i onClick={() => setPage('Shopping')} className='fas fa-shopping-cart fa-2x'></i>
				<i onClick={() => setPage('Greeting')} className='fas fa-home fa-4x'></i>
			</div>
		</div>
	);
}

/*
function Nav() {
	const [page, setPage] = React.useState(<Greeting />);

	return (
		<div>
			{page}
			<div className='nav'>
				<i onClick={() => setPage(<Recipe />)} className='fas fa-utensils fa-2x'></i>
				<i onClick={() => setPage(<Calc />)} className='fas fa-calculator fa-2x'></i>
				<i onClick={() => setPage(<Todo />)} className='fas fa-list fa-2x'></i>
				<i onClick={() => setPage(<Shopping />)} className='fas fa-shopping-cart fa-2x'></i>
				<i onClick={() => setPage(<Greeting />)} className='fas fa-home fa-4x'></i>
			</div>
		</div>
	);
}
*/

export default Nav;
