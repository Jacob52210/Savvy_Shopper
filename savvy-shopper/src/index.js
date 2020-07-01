import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Calc from './components/calculator/calc';
import Greeting from './components/greeting/greeting';
import Nav from './components/nav_links/nav';
import Recipe from './components/recipe/recipe';
import Shopping from './components/shopping_list/shopping';
import Todo from './components/todo_list/todo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Calc />
		<App />
		<Recipe />
		<Shopping />
		<Todo />
		<Nav />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
