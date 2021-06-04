import React, { Fragment } from 'react';


const Useful = () => {
	return (
		<Fragment>
			<div class="useful__natural natural">
				<div class="natural__img">
					<img src="img/natural.jpg" alt=""></img>
				</div>
				<div class="natural__text">
					Если ты постоянно в поисках чего-то нового
				</div>
			</div>
			<div class="useful__legal-entity legal-entity">
				<div class="legal-entity__img">
					<img src="/img/legal-unity.jpg" alt=""></img>
				</div>
				<div class="legal-entity__text">
					Если ты являешься организатором крупных мероприятий
				</div>
			</div>
		</Fragment>
	);
}

export default Useful;