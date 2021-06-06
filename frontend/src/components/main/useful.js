import React, { Fragment } from 'react';


const Useful = () => {
	return (
		<Fragment>
			<div className="useful__natural natural">
				<div className="natural__img">
					<img src="img/natural.jpg" alt=""></img>
				</div>
				<div className="natural__text">
					Если ты постоянно в поисках чего-то нового
				</div>
			</div>
			<div className="useful__legal-entity legal-entity">
				<div className="legal-entity__img">
					<img src="/img/legal-unity.jpg" alt=""></img>
				</div>
				<div className="legal-entity__text">
					Если ты являешься организатором крупных мероприятий
				</div>
			</div>
		</Fragment>
	);
}

export default Useful;