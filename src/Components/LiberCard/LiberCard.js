import React from 'react'
import './LiberCard.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const LiberCard = () => {
	return (
		<div id='liberCard'>
        	<h1>Liber.</h1>
            <p>Opening Hours: <b>MO-SA 11:00-23:00</b></p>
            <p>This demo shows Liber theme as a backbone of a beautiful healthy restaurant website. This premium restaurant & bar theme offers niche optimized features and modern responsive design in an easy to use package.</p>
        	<button>make a reservation <FontAwesome name='arrow-right' /></button>
        </div> 
	)
}

export default LiberCard