import React from 'react';
import Greeting from '../greeting/greeting';
import './nav.scss';
import Shopping from '../shopping_list/shopping';
import Recipe from '../recipe/recipe';

function App() {
	const [page, setPage] = React.useState('Greeting');

	const changeName = () => {
		do {
			localStorage.removeItem('userName');
			localStorage.setItem('userName', prompt('Enter A New Name:'));
		} while (localStorage.getItem('userName').trim() === '');
	};

	return (
		<div>
			{page === 'Recipe' ? <Recipe /> : page === 'Shopping' ? <Shopping /> : <Greeting />}
			<div className='nav'>
				<i title='Recipe Search' onClick={() => setPage('Recipe')} className='fas fa-utensils fa-2x'></i>
				<i title='Shopping List' onClick={() => setPage('Shopping')} className='fas fa-shopping-cart fa-2x'></i>
				<i title='Change Your Name' onClick={changeName} className='fas fa-user fa-2x'></i>
				<i title='Home' onClick={() => setPage('Greeting')} className='fas fa-home fa-4x'></i>
			</div>
		</div>
	);
}

export default App;
