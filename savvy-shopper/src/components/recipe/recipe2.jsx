import React from 'react';
import './recipe.scss';

const Recipes = ({ title, calories, image, ingredients }) => {
	return (
		<div className='cards'>
			<h1>{title}</h1>
			<p>{Math.round(calories)} Calories</p>
			<img className='food-pics' src={image} alt={title} />
			<ul>
				{ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient.text}</li>
				))}
			</ul>
		</div>
	);
};

export default Recipes;

// This Recipe Search API was inspired by Dev Ed. YouTube address: https://www.youtube.com/watch?v=U9T6YkEDkMo&t=1519s
