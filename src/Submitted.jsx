import React from 'react';

const Submitted = () => {
	return (
		<div className="completed">
			<img src="/images/icon-complete.svg" alt="check mark complete" />
			<h1 className="title">THANK YOU!</h1>
			<h2 className="sub-title">We've added your card details</h2>

			<button className="continue-btn">Continue</button>
		</div>
	);
};

export default Submitted;
