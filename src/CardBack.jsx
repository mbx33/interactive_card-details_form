import { useNumbers } from '../contexts/NumbersContext';

const CardBack = () => {
	const { cardCvv } = useNumbers();
	return (
		<>
			<div className="card-back">
				<img src="/images/bg-card-back.png" alt="cc image back" />
				<p className="card-cvv">{cardCvv}</p>
			</div>
		</>
	);
};

export default CardBack;
