import React, { useContext, useState, useEffect } from 'react';
import gameContext from '../context/gameContext';
import Options from './Options';
import TitleAndDescription from './TitleAndDescription';

const Main = () => {
	const [state, dispatch] = useContext(gameContext);
	const {
		time,
		wordsArray,
		wordsArrayLength,
		randomNumber,
		started,
		currentScore,
		selectTimerValue
	} = state;

	const [userAnswer, setUserAnswer] = useState('');

	useEffect(() => {
		if (time === 0) {
			setUserAnswer('');
			// CLEAN UP THE INITIAL STATE TO AVOID BUG IN THE DIFFICULTIES AND TIME CHOICE
			dispatch({
				type: 'RESET_INITIAL_STATE'
			});
		}
	}, [time]);

	const randomNumberGenerator = number => {
		return Math.round(Math.random() * number);
	};

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
			}, time * 1000);
		}
	};

	const handleStart = () => {
		dispatch({
			type: 'RESET_SCORE'
		});
		dispatch({
			type: 'SET_START',
			payload: true
		});
		timerFunction();
		setUserAnswer('');
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
			<TitleAndDescription />
			<h3>{started && <div>The words: {wordsArray[randomNumber]}</div>}</h3>
			<Options />
				<div>
					<input
						type="text"
						name="userAnswer"
						id=""
						onChange={handleUserAnswer}
						onKeyPress={handleUserAnswerValidation}
						disabled={!started}
						value={userAnswer}
					/>
				</div>
				{!started && (
					<button
						onClick={handleStart}
						disabled={selectTimerValue === '' ? true : false}
					>
						Start
					</button>
				)}
			{started && <div>Time left: {time}</div>}
			<div className="currentScore">
				<span>Your current score: {currentScore}</span>
			</div>
		</div>
	);
};

export default Main;
