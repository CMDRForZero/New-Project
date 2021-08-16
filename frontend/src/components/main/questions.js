import React, { Fragment, useState } from 'react';

import data from './data'
import SingleQuestion from './question'

const Questions = () => {
	const [questions, setQuestions] = useState(data)

	return (
		<Fragment>
			<div className="questions__text">
				Вопросы и ответы
			</div>
			<div className="questions__question">
				{questions.map((question) => (
					<SingleQuestion key={question.id} {...question} />
				))}
			</div>
		</Fragment>
	);
}

export default Questions;