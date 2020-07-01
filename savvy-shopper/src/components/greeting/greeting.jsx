import React from 'react';
import ReactDOM from 'react-dom';
import './greeting.scss';

function setName() {
	let yourName = localStorage.getItem('userName');

	if (yourName === null) {
		return (yourName = localStorage.setItem(
			'userName',
			prompt('Enter Your Name:')
		));
	}
}

setName();

function App() {
	const date = new Date();
	const hours = date.getHours();
	const rightNow = date.toLocaleTimeString();
	let theme;

	let timeOfDay;

	if (hours < 11) {
		timeOfDay = 'Good Morning, ';
		theme = 'greeting morning';
	} else if (hours >= 11 && hours < 17) {
		timeOfDay = 'Good Afternoon, ';
		theme = 'greeting afternoon';
	} else {
		timeOfDay = 'Good Evening, ';
		theme = 'greeting night';
	}

	return (
		<div className={theme}>
			<h3>{rightNow}</h3>
			<h1>{timeOfDay + localStorage.getItem('userName') + '!'}</h1>
		</div>
	);
}

function Tick() {
	ReactDOM.render(<App />, document.getElementById('greeting'));
}

setInterval(Tick, 1000);
