import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className = 'bg-white dib br4 pa3 ma2 grow tc'> 
			<img src ={`https://robohash.org/${id}?size=200x200`} alt = 'photo' />
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;