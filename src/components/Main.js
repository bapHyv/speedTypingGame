import React, { useContext, useState } from 'react';
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
		currentScore
	} = state;

	const [userAnswer, setUserAnswer] = useState('');

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
				dispatch({
					type: 'SET_START',
					payload: false
				});
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
				event.target.value = ''
			}
		}
	};

	console.log(userAnswer);

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
				/>
			</div>
			{!started && <button onClick={handleStart}>Start</button>}
			{started && <div>Time left: {time}</div>}
			<div className="currentScore">
				{started && <span>Your current score: {currentScore}</span>}
			</div>
		</div>
	);
};

export default Main;
