import React, { useContext } from 'react';
import gameContext from '../context/gameContext';
import Options from './Options';
import TitleAndDescription from './TitleAndDescription';

const Main = () => {
	const [state, dispatch] = useContext(gameContext);
    const { time, wordsArray, randomNumber } = state;
    
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

	const handleStart = async () => {
		timerFunction();
	};

	return (
		<div>
			<TitleAndDescription />
			<h3>The word: </h3>
			<Options />
			<div>
				<input type="text" name="" id="" />
			</div>
			<button onClick={handleStart}>Start</button>
			{time !== null && time !== 0 && <div>Time left: {time}</div>}
			<div className="currentScore">
				<span>Your current score:</span>
			</div>
		</div>
	);
};

export default Main;
