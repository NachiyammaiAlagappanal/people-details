/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import displayButton from './components/displayButton';
import DisplayList from './components/displayList';
// import DisplayList from './components/displayList';
import getName from './components/getName.js';
// import data from './data.js';

const App = (context) => {
	// eslint-disable-next-line react/destructuring-assignment
	console.log(context.state);

	return (
		<div className="App" role="App">
			<div>{ getName(context) }</div>
			<div>{ displayButton(context) }</div>
			<div> { DisplayList() }</div>
		</div>
	);
};

export default App;
