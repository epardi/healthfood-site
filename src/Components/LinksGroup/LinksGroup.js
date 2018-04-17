import React from 'react'
import './LinksGroup.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom'

const LinksGroup = () => {
	return (
		<div className='links-group'>
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
                        <div id="dropdown-menu">
                            <p><NavLink to='/shop'>Shop</NavLink></p>
                            <p><NavLink to='/contact'>Contact</NavLink></p>
                        </div>
                    </span>
                </li>
            </ul>
        </div>
	)
}

export default LinksGroup