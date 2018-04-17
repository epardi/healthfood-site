import React from 'react'
import NavLeft from '../../Components/NavLeft/NavLeft.js'
import ToggleMobileMenu from '../../Components/ToggleMobileMenu/ToggleMobileMenu.js'
import NavRight from '../../Components/NavRight/NavRight.js'
import aboutBackground from '../../img/aboutBannerImg.jpg'
import Banner from '../../Components/Banner/Banner.js'
import AboutCols from './AboutCols.js'
import OurStory from './OurStory.js'
import OurTeam from './OurTeam.js'
import Footer from '../../Components/Footer/Footer.js'

const About = () => {
	return (
		<div className='about'>
			<nav>
				<NavLeft />
				<ToggleMobileMenu />
				<NavRight />
			</nav>
			<Banner backgroundImage={aboutBackground} headerText='about' />
			<AboutCols />
			<OurStory />
			<OurTeam />
			<Footer />
		</div>
	)
}

export default About