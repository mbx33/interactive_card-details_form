import { useNumbers } from '../contexts/NumbersContext';

const CardFront = () => {
	const { cardNumber, cardName, cardMonth, cardYear } = useNumbers();

	return (
		<>
			<div className="card-front">
				<img src="/images/card-logo.svg" alt="card logo" className="card-logo" />
				<img src="/images/bg-card-front.png" alt="cc image front" />
				<p className="card-number">{cardNumber}</p>
				<p className="card-name">{cardName}</p>
				<p className="card-month">{cardMonth} /</p>
				<p className="card-year">{cardYear}</p>
			</div>
		</>
	);
};

export default CardFront;
