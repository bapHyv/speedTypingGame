import React, { useContext, useState, useRef } from 'react';

import gameContext from '../context/gameContext';

import Options from './Options';
import Description from './Description';

import { randomNumberGenerator } from '../externalFunctions/randomNumberGenerator';

const Main = () => {
	const [state, dispatch] = useContext(gameContext);
	const {
		time,
		wordsArray,
		wordsArrayLength,
		randomNumber,
		started,
		currentScore,
		selectTimerValue,
		selectDifficultyValue
	} = state;

	const [userAnswer, setUserAnswer] = useState('');

	const inputRef = useRef(null);

	const timerFunction = () => {
		if (time) {
			const timeInterval = setInterval(() => {
				dispatch({
					type: 'TIME_RUNNING',
					payload: 1
				});
			}, 1000);
			setTimeout(() => {
				clearInterval(timeInterval);
				// ERASE ALL THE LETTERS LEFT IN THE INPUT
				setUserAnswer('');
				// CLEAN UP THE INITIAL STATE TO AVOID BUG IN THE DIFFICULTIES AND TIME CHOICE
				dispatch({
					type: 'RESET_INITIAL_STATE'
				});
			}, time * 1000);
		}
	};

	const handleStart = () => {
		// AFTER THE GAME, THE SCORE STAYS DISPLAYED TO ALLOW THE USER TO SEE HIS SCORE. WHEN A NEW A GAME START, THE SCORE IS RESETED
		dispatch({
			type: 'RESET_SCORE'
		});
		dispatch({
			type: 'SET_START',
			payload: true
		});
		timerFunction();
		// ENABLE MANUALY THE INPUT ELEMENT TO ALLOW THE FOCUS WHICH TAKES PLACE NEXT LINE
		inputRef.current.disabled = false;
		// FOCUS ON THE INPUT ELEMENT WHEN THE BUTTON START IS PRESSED SO THE USER CAN TYPE RIGHT AWAY WHEN THE GAME BEGIN
		inputRef.current.focus();
	};

	const handleUserAnswer = event => {
		const { value } = event.target;
		setUserAnswer(value);
	};

	const handleUserAnswerValidation = event => {
		if (event.key === 'Enter') {
			if (wordsArray[randomNumber] === userAnswer) {
				dispatch({
					type: 'UPDATE_CURRENT_SCORE'
				});
				dispatch({
					type: 'SET_RANDOM_NUMBER',
					payload: randomNumberGenerator(wordsArrayLength)
				});
				setUserAnswer('');
			}
		}
	};

	return (
		<div>
			<h1 className="neon-title" data-text="[SPEED TYPING GAME]">
				[SPEED TYPING GAME]
			</h1>
			<Options />
			<h3>
				{started ? (
					<div>{wordsArray[randomNumber]}</div>
				) : (
					<div className="wordPlaceholder"></div>
				)}
			</h3>
			<div>
				<input
					type="text"
					name="userAnswer"
					id=""
					onChange={handleUserAnswer}
					onKeyPress={handleUserAnswerValidation}
					disabled={!started}
					value={userAnswer}
					ref={inputRef}
				/>
			</div>
			{!started && (
				<button
					className={
						selectTimerValue && selectDifficultyValue
							? 'startButton'
							: 'startButtonDisabled'
					}
					onClick={handleStart}
					disabled={selectTimerValue === "" || selectDifficultyValue === "" ? true : false}
				>
					Start
				</button>
			)}
			{started && <h4 className="timeLeftPlaceholder">Time left: {time}</h4>}
			<div className="currentScore">
				<span>Your current score: {currentScore}</span>
			</div>
			<Description />
		</div>
	);
};

export default Main;
