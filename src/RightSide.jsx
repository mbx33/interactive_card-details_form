import { useState } from 'react';

// components
import Form from './Form';
import Submitted from './Submitted';

//styles
import './styles/rightside.css';

const RightSide = () => {
	const [submitted, setSubmitted] = useState(false);

	return (
		<div className="right-section">
			{submitted && <Submitted />}
			{!submitted && <Form setSubmitted={setSubmitted} />}
		</div>
	);
};

export default RightSide;
