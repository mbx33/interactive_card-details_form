// import { useState } from 'react';
import { useNumbers } from '../contexts/NumbersContext';

import './styles/form.css';

const Form = ({ setSubmitted }) => {
	const {
		cardNumber,
		cardName,
		cardMonth,
		cardYear,
		cardCvv,
		handleCardNumberChange,
		handleCardNameChange,
		handleMonthChange,
		handleYearChange,
		handleCvvChange,
	} = useNumbers();

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}>
				<div className="input-group">
					<label htmlFor="name">Cardholder Name</label>
					<input
						type="text"
						name="name"
						placeholder="eg. Jane Appleseed"
						// value={cardName}
						onChange={handleCardNameChange}
					/>
				</div>
				<div className="input-group">
					<label>Card Number</label>
					<input
						type="text"
						name="email"
						maxLength="19"
						value={cardNumber}
						placeholder="eg. 4444 3545 2221 9090"
						onChange={handleCardNumberChange}
					/>
				</div>
				<div className="exp-date">
					<div className="expy-date">
						<label>Exp. Date (MM/YY)</label>
						<div className="dates">
							<input
								className="exp-month"
								type="text"
								name="exp-month"
								placeholder="MM"
								maxLength={2}
								onChange={handleMonthChange}
								// value={cardMonth}
							/>
							<input
								className="exp-year"
								type="text"
								name="exp-year"
								placeholder="YY"
								maxLength={2}
								onChange={handleYearChange}
								// value={cardYear}
							/>
						</div>
					</div>

					<div className="cvv-block">
						<label className="cvv-label">CVV</label>
						<input
							type="text"
							name="cvv"
							placeholder="eg. 123"
							maxLength={3}
							onChange={handleCvvChange}
							// value={cardCvv}
						/>
					</div>
				</div>

				<div>
					<button className="submit-btn">Confirm</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
