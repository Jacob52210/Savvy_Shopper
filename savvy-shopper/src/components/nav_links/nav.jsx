import React from 'react';
import Greeting from '../greeting/greeting';
import './nav.scss';
import Shopping from '../shopping_list/shopping';
import Recipe from '../recipe/recipe';

function App() {
	const [page, setPage] = React.useState('Greeting');

	return (
		<div>
			{page === 'Recipe' ? <Recipe /> : page === 'Shopping' ? <Shopping /> : <Greeting />}
			<div className='nav'>
				<i onClick={() => setPage('Recipe')} className='fas fa-utensils fa-2x'></i>
				<i onClick={() => setPage('Shopping')} className='fas fa-shopping-cart fa-2x'></i>
				<i onClick={() => setPage('Greeting')} className='fas fa-home fa-4x'></i>
			</div>
		</div>
	);
}

export default App;
