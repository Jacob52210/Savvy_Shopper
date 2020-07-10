import React, { useState, useEffect } from 'react';
import Recipes from './recipe2';
import './recipe.scss';
require('dotenv').config();

const Recipe = () => {
	const API_ID = 'd843d4c8';
	const API_KEY = '2e30a51ebccb2f3115c10140b3e38ea0';

	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};

	return (
		<div className='Recipe'>
			<form className='search-form'>
				<input className='search-bar' type='text' />
				<button className='search-btn' type='submit'>
					Search
				</button>
			</form>
			{recipes.map((recipe) => (
				<Recipes
					key={recipe.recipe.label}
					title={recipe.recipe.label}
					calories={recipe.recipe.calories}
					image={recipe.recipe.image}
				/>
			))}
		</div>
	);
};

export default Recipe;
