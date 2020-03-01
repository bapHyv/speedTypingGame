import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ScorePage from './pages/ScorePage';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/score">
					<ScorePage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
