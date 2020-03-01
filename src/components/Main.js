import React from 'react';

const Main = () => {
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
					<select name="" id="">
						<option value="">--Choose a difficulty--</option>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
				</div>
				<div>
					<h2>Time:</h2>
					<select name="" id="">
						<option value="">--Choose a time--</option>
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
			<button>Start</button>
			<div>
				<span>Your current score:</span>
			</div>
		</div>
	);
};

export default Main;
