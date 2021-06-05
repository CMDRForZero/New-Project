import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { CSSTransitionGroup } from 'react-transition-group'

const Question = ({ title, info }) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<article className='question'>
			<CSSTransitionGroup
				transitionName="example"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}>
				<header>
					<h4 onClick={() => setExpanded(!expanded)} className='question-title'>
						{title}
					</h4>
					<button className='btn' onClick={() => setExpanded(!expanded)}>
						{expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
					</button>
				</header>
				{expanded && <p>{info}</p>}
			</CSSTransitionGroup>
		</article>
	)
}

export default Question