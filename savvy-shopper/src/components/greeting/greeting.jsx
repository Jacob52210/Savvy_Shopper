import React from 'react';
import ReactDOM from 'react-dom';
import './greeting.scss';

let yourName = prompt('Enter Your Name:');

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
			<h1>{timeOfDay + yourName + '!'}</h1>
		</div>
	);
}

function Tick() {
	ReactDOM.render(<App />, document.getElementById('greeting'));
}

setInterval(Tick, 1000);
