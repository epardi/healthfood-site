import React from 'react'
import './NavRight.css'
import LinksGroup from '../LinksGroup/LinksGroup.js'
import BtnAndIcons from '../BtnAndIcons/BtnAndIcons.js'

const NavRight = () => {
	return (
		<div className='nav-right'>
			<LinksGroup />
            <BtnAndIcons />
		</div>
	)
}

export default NavRight