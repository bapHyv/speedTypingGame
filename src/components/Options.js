import React, { useState, useEffect, useRef, useContext } from 'react';
import gameContext from '../context/gameContext';


const Options = () => {
	const [state, dispatch] = useContext(gameContext);

	const [time, setTime] = useState(null);
	const [difficulty, setDifficulty] = useState(null);

	useEffect(() => {
		dispatch({
			type: 'SET_TIMER',
			payload: time
		});
		dispatch({
			type: 'SET_DIFFICULTY',
			payload: difficulty
		});
	}, [time, difficulty]);

	const handleTimeChange = event => {
		const { value } = event.target;
		setTime(parseInt(value));
	};

	const handleDifficultyChange = event => {
		const { value } = event.target;
		setDifficulty(value);
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'space-around' }}>
			<div>
				<h2>Difficulties:</h2>
				<select name="difficulty" id="" onChange={handleDifficultyChange}>
					<option value="">--Choose a difficulty--</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
			</div>
			<div>
				<h2>Time:</h2>
				<select name="time" onChange={handleTimeChange}>
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
