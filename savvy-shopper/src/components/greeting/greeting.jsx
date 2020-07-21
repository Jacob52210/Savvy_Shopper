import React, { useState, useEffect } from 'react';
import './greeting.scss';

function setName() {
	let yourName = localStorage.getItem('userName');
	if (yourName === null) {
		return (yourName = localStorage.setItem('userName', prompt('Enter Your Name:')));
	}
}

setName();

const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsInYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function App() {
	const [date, setDate] = useState(new Date());
	const hours = date.getHours();
	const rightNow = date.toLocaleTimeString();
	const dayOfWeek = date.getDay();
	const month = date.getMonth();
	const dayOfMonth = date.getDate();

	let theme;
	let timeOfDay;
	let today = daysInWeek[dayOfWeek];
	let thisMonth = monthsInYear[month];

	if (hours >= 5 && hours < 11) {
		timeOfDay = 'Good Morning, ';
		theme = 'greeting morning';
	} else if (hours >= 11 && hours < 17) {
		timeOfDay = 'Good Afternoon, ';
		theme = 'greeting afternoon';
	} else if (hours >= 17 && hours < 24) {
		timeOfDay = 'Good Evening, ';
		theme = 'greeting night';
	} else {
		timeOfDay = 'Good Morning, ';
		theme = 'greeting night';
	}

	useEffect(() => {
		setInterval(() => {
			setDate(new Date());
		}, 1000);

		function cleanup() {
			for (let i = 0; i < 10000; ++i) {
				clearInterval(i);
			}
		}
		return cleanup;
	}, []);

	return (
		<div className={theme}>
			<div className='date-time'>
				<h2>{rightNow}</h2>
				<h2>{today + ', ' + thisMonth + ' ' + dayOfMonth}</h2>
			</div>
			<h1>{timeOfDay + localStorage.getItem('userName') + '!'}</h1>
			<h5 className='recipes'>Recipes</h5>
			<h5 className='shopping'>Shopping List</h5>
			<h5 className='home'>Home</h5>
		</div>
	);
}

export default App;
