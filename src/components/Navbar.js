import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<ul>
				<Link to="/">
					<li>Speed typing game</li>
				</Link>
				<Link to="/score">
					<li>My score</li>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
