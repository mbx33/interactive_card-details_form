import React, { useContext, useState, createContext } from 'react';

const NumbersContext = createContext();

export function useNumbers() {
	return useContext(NumbersContext);
}

export function NumbersProvider({ children }) {
	if (NumbersContext === undefined) {
		throw new Error('useNumbers() must be used inside a ResponseProvider');
	}

	const [cardName, setCardName] = useState('Jane Appleseed');
	const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
	const [cardMonth, setCardMonth] = useState('00');
	const [cardYear, setCardYear] = useState('00');
	const [cardCvv, setCardCvv] = useState('000');

	const handleCardNameChange = (event) => {
		setCardName(event.target.value);
	};

	const handleCardNumberChange = (event) => {
		const input = event.target.value.replace(/\D/g, '').substring(0, 16);
		const formattedCardNumber = input.match(/.{1,4}/g)?.join(' ') || '';
		setCardNumber(formattedCardNumber);
	};

	const handleMonthChange = (event) => {
		setCardMonth(event.target.value);
	};

	const handleYearChange = (event) => {
		setCardYear(event.target.value);
	};

	const handleCvvChange = (event) => {
		setCardCvv(event.target.value);
	};

	const value = {
		cardNumber,
		cardName,
		cardMonth,
		cardYear,
		cardCvv,
		handleCardNameChange,
		handleCardNumberChange,
		handleMonthChange,
		handleYearChange,
		handleCvvChange,
	};

	return <NumbersContext.Provider value={value}>{children}</NumbersContext.Provider>;
}
