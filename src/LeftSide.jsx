import React from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

const LeftSide = () => {
	return (
		<div className="left-container">
			<CardFront />
			<CardBack />
		</div>
	);
};

export default LeftSide;
