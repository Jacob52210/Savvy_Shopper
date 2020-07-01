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

	let timeOfDay;

	if (hours < 11) {
		timeOfDay = 'Good Morning, ';
	} else if (hours >= 11 && hours < 17) {
		timeOfDay = 'Good Afternoon, ';
	} else {
		timeOfDay = 'Good Evening, ';
	}

	return (
		<div className="greeting">
			<h3>{rightNow}</h3>
			<h1>{timeOfDay + localStorage.getItem('userName') + '!'}</h1>
		</div>
	);
}

function Tick() {
	ReactDOM.render(<App />, document.getElementById('greeting'));
}

setInterval(Tick, 1000);
