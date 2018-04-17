import React from 'react'
import './MobileMenu.css'
import FontAwesome from 'react-fontawesome'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {
	return (
		<div id='mobile-menu'>
			<ul>
            	<li>
                	<NavLink to='/'>Home</NavLink>
                	<NavLink to='/about'>About</NavLink>
                	<NavLink to='/menu'>Menu</NavLink>
                	<NavLink to='/blog'>Blog</NavLink>
                	<span>
                        <NavLink to='/'>Features
                        <FontAwesome name='angle-down' />
                        </NavLink> 
                        <ul>
                            <li><NavLink to='/shop'>Shop</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </span>
              	</li>
            </ul>
            <button>Book a table</button>
		</div>
	)
}

export default MobileMenu