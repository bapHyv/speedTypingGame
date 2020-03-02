import React, { useState, useEffect, useContext } from 'react';

import gameContext from '../context/gameContext';

import axios from 'axios';

import { randomNumberGenerator } from '../externalFunctions/randomNumberGenerator';

import '../css/option.css'

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
		<div className="choices">
			<div className="options">
				<h2>Difficulties:</h2>
				<div >
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
			</div>
			<div className="options">
				<h2>Time:</h2>
				<div>
					<select
						name="time"
						onChange={handleTimerChange}
						value={selectTimerValue}
					>
						<option value="">--Choose a time--</option>
						<option value="5">5 secondes</option>
						<option value="15">15 secondes</option>
						<option value="30">30 secondes</option>
						<option value="45">45 secondes</option>
						<option value="60">60 secondes</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Options;
