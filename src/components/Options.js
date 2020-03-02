import React, { useState, useEffect, useContext } from 'react';

import gameContext from '../context/gameContext';

import axios from 'axios';

import { randomNumberGenerator } from '../externalFunctions/randomNumberGenerator';

const Options = () => {
	const [state, dispatch] = useContext(gameContext);
	const { wordsArray, selectDifficultyValue, selectTimerValue, time } = state;

	const [timer, setTime] = useState(null);
	const [difficultyLocalState, setDifficulty] = useState(null);

	useEffect(() => {
		dispatch({
			type: 'SET_TIMER',
			payload: timer
		});
		dispatch({
			type: 'SET_DIFFICULTY',
			payload: difficultyLocalState
		});
		if (difficultyLocalState) {
			getData();
			dispatch({
				type: 'SET_WORDS_ARRAY_LENGTH',
				payload: wordsArray.length
			});
			dispatch({
				type: 'SET_RANDOM_NUMBER',
				payload: randomNumberGenerator(wordsArray.length)
			});
		}
	}, [timer, difficultyLocalState, wordsArray.length]);

	const getData = async () => {
		const words = await axios.get(`/${difficultyLocalState}Words`);
		dispatch({
			type: 'SET_WORDS_ARRAY',
			payload: words.data
		});
	};

	const handleTimerChange = event => {
		const { value } = event.target;
		setTime(parseInt(value));
		dispatch({
			type: 'SET_SELECT_TIMER_VALUE',
			payload: value
		});
	};

	const handleDifficultyLocalStateChange = async event => {
		const { value } = event.target;
		setDifficulty(value);
		dispatch({
			type: 'SET_SELECT_DIFFICULTY_VALUE',
			payload: value
		});
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'space-around' }}>
			<div>
				<h2>Difficulties:</h2>
				<select
					name="difficulty"
					onChange={handleDifficultyLocalStateChange}
					value={selectDifficultyValue}
				>
					<option value="">--Choose a difficulty--</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
			</div>
			<div>
				<h2>Time:</h2>
				<select
					name="time"
					onChange={handleTimerChange}
					value={selectTimerValue}
				>
					<option value="">--Choose a time--</option>
					<option value="5">5</option>
					<option value="15">15</option>
					<option value="30">30</option>
					<option value="45">45</option>
					<option value="60">60</option>
				</select>
			</div>
		</div>
	);
};

export default Options;
