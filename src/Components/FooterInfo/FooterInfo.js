import React from 'react'
import logo from '../../img/liber-logo.png'
import './FooterInfo.css'
import { NavLink } from 'react-router-dom'

const FooterInfo = () => {
	return (
		<div>
			<div id='about-us-footer'>
				<p>about us</p>
				<img src={logo} alt='liber-logo'/>
				<p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est.</p>
				<p><b>Address:</b> Liber Street, France</p>
				<p><b>Phone:</b> 80808 8978 870</p>
				<p><b>Email:</b> <span>info@liber.com</span></p>
				<p><b>Website:</b> <span><NavLink to ='/'>liber.com</NavLink></span></p>
			</div>
			<div id='opening-hours-footer'>
				<p>opening hours</p>
				<div>
					<ul>
						<li>Monday <b>11:00-23:00</b></li>
						<li>Tuesday <b>11:00-23:00</b></li>
						<li>Wednesday <b>CLOSED</b></li>
						<li>Thursday <b>11:00-22:00</b></li>
						<li>Friday <b>11:00-24:00</b></li>
						<li>Saturday <b>11:00-24:00</b></li>
						<li>Sunday <b>11:00-22:00</b></li>
					</ul>
				</div>
			</div>
			<div id='recent-posts-footer'>
				<p>recent posts</p>
				<div>
					<ul>
						<li><NavLink to ='/'>Beetroot cake - healthy chocolate cake</NavLink></li>
						<li><NavLink to ='/'>Refreshing smoothie to start your day</NavLink></li>
						<li><NavLink to ='/'>Post quote</NavLink></li>
						<li><NavLink to ='/'>Pinky smoothie perfect breakfast</NavLink></li>
					</ul>
				</div>
				<p>instagram</p>
				<div id='instagram-foods'>
					<div className='instagram-food'></div>
					<div className='instagram-food'></div>
					<div className='instagram-food'></div>
					<div className='instagram-food'></div>
					<div className='instagram-food'></div>
				</div>
			</div>
		</div>
	)
}

export default FooterInfo