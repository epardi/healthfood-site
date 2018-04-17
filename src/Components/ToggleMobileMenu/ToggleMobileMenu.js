import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import IconGroup from '../IconGroup/IconGroup.js'
import MobileMenu from '../MobileMenu/MobileMenu.js'
import './ToggleMobileMenu.css'

class ToggleMobileMenu extends Component {
	constructor(props) {
		super(props)
		this.state = { isMenuOpen: false }
	}
	handleClick = () => {
		this.setState(prevState => ({
			isMenuOpen: !prevState.isMenuOpen
		}))
	}
	render() {
		return (
			<div id='toggle-mobile-menu' 
				className={this.state.isMenuOpen ? 'visible' : ''}
				onClick={this.handleClick}
			>
				<FontAwesome name='bars' />
				<MobileMenu />
				<IconGroup />
			</div>
		)
	}
}

export default ToggleMobileMenu