import React from 'react'
import './SpecialsCard.css'

const SpecialsCard = () => {
	return (
		<div id='specials-card'>
			<div className='special-item'>
				<h4>PINKY SMOOTHIE</h4>
				<p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est</p><span>7,00€</span>
			</div>
			<div className='special-item'>
				<h4>RASPBERRY CAKE</h4>
				<p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est</p><span>5,00€</span>
			</div>
			<div className='special-item'>
				<h4>VEGAN FALAFEL</h4>
				<p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est</p><span>35,00€</span>
			</div>
		</div>
	)
}

export default SpecialsCard