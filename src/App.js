import React, { useReducer } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ScorePage from './pages/ScorePage';
import { Switch, Route } from 'react-router-dom';

import { GameProvider } from './context/gameContext';
import { gameReducer, initialGameState } from './reducer/gameReducer';

function App() {
	const useGameState = useReducer(gameReducer, initialGameState);
	return (
		<div>
			<GameProvider value={useGameState}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/score">
						<ScorePage />
					</Route>
				</Switch>
			</GameProvider>
		</div>
	);
}

export default App;
