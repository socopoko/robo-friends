import React from 'react';

const Searchbox = ({searchField, searchChange}) => {
	return(
	<div className='pa2'>
		<input 
		className='pa3 br-pill bn bg-white'
		type='text' 
		placeholder='search robots' 
		onChange = {searchChange}
		/>
	</div>
	);
}

export default Searchbox;