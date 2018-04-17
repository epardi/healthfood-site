import React from 'react'
import './GiftCards.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const GiftCards = () => {
	return (
		<div id='gift-cards'>
			<div>
				<p>make someone happy</p>
				<h1>liber. gift cards</h1>
				<p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris. Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est.</p>
				<button>Tell me More <FontAwesome name='arrow-right' /></button>
			</div>
		</div>
	)
}

export default GiftCards