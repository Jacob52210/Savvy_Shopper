import React, { useState, useEffect } from 'react';
import Recipes from './recipe2';
import './recipe.scss';
require('dotenv').config();

const Recipe = () => {
	const API_ID = 'd843d4c8';
	const API_KEY = '2e30a51ebccb2f3115c10140b3e38ea0';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&to=20`);
		const data = await response.json();

		setRecipes(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className='Recipe'>
			<h1>Recipe Search</h1>
			<form onSubmit={getSearch} className='search-form'>
				<input className='search-bar' type='text' value={search} onChange={updateSearch} placeholder='Search' />
				<button className='search-btn' type='submit'>
					<i className='fas fa-search'></i>
				</button>
			</form>
			<p>Please limit searches to no more than 5 per minute.</p>
			<div className='search-results'>
				{recipes.map((recipe) => (
					<Recipes
						key={recipe.recipe.image}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default Recipe;

// This Recipe Search API was inspired by Dev Ed. YouTube address: https://www.youtube.com/watch?v=U9T6YkEDkMo&t=1519s
