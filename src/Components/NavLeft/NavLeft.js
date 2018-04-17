import React from 'react'
import './NavLeft.css'
import ContactInfo from '../ContactInfo/ContactInfo.js'

const NavLeft = () => {
	return (
		<div className='nav-left'>
	    	<div id='logo'></div>
	        <ContactInfo />
	    </div>
    )
}

export default NavLeft