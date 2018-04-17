import React from 'react'
import './SpecialOffers.css'
import SpecialsCard from '../SpecialsCard/SpecialsCard.js'

const SpecialOffers = () => {
	return (
		<div id='special-offers'>
			<div id='specials-left-panel'>
				<p>taste today</p>
				<h1>special offers</h1>
				<SpecialsCard />
			</div>
			<div id='specials-right-panel'>
			</div>
		</div>
	)
}

export default SpecialOffers