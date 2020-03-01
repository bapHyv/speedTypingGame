import React, { useState, useEffect, useRef, useContext } from 'react';
import gameContext from '../context/gameContext';

const Main = () => {
	const [state, dispatch] = useContext(gameContext);

    const [time, setTime] = useState(null);
    const [difficulty, setDifficulty] = useState(null)

	useEffect(() => {
		dispatch({
			type: 'SET_TIMER',
			payload: time
        });
        dispatch({
            type: 'SET_DIFFICULTY',
            payload: difficulty
        })
	}, [time, difficulty]);

	const handleTimeChange = event => {
		const { value } = event.target;
		setTime(parseInt(value));
    };

    const handleDifficultyChange = event => {
        const {value} = event.target
        setDifficulty(value)
    }

    const timerFunction = () => {
        if (time) {
			const timeInterval = setInterval(() => {
				setTime(prevTime => {
					return prevTime - 1;
				});
			}, 1000);
		setTimeout(() => {
            clearInterval(timeInterval)
        }, time * 1000)
		}
    }

	const handleStart = () => {
		timerFunction()
	};

	console.log(time);
	console.log('state', state);
	return (
		<div>
			<h1>SPEED TYPING GAME</h1>
			<p>
				How to play: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Temporibus quos sunt, laudantium obcaecati asperiores id quod officiis
				ea ad. Voluptas delectus ea est harum ex dolorem ratione, molestiae
				veniam qui!
			</p>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<div>
					<h2>Difficulties:</h2>
					<select name="difficulty" id="" onChange={handleDifficultyChange} >
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
			<h3>The word:</h3>
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
