import React, { useReducer } from 'react';

import './App.css';

import HomePage from './pages/HomePage';

import { GameProvider } from './context/gameContext';
import { gameReducer, initialGameState } from './reducer/gameReducer';

function App() {
	const useGameState = useReducer(gameReducer, initialGameState);
	return (
		<div>
			<GameProvider value={useGameState}>
				<HomePage />
			</GameProvider>
		</div>
	);
}

export default App;
