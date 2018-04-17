import React from 'react'
import MailingList from '../MailingList/MailingList.js'
import FoodGrid from '../FoodGrid/FoodGrid.js'
import FooterInfo from '../FooterInfo/FooterInfo.js'

const Footer = () => {
	return (
		<div id='footer'>
			<MailingList />
			<FoodGrid />
			<FooterInfo />
			<hr></hr>
		</div>
	)
}

export default Footer