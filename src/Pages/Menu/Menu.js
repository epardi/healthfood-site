import React, { Component } from 'react'
import './Menu.css'
import NavLeft from '../../Components/NavLeft/NavLeft.js'
import ToggleMobileMenu from '../../Components/ToggleMobileMenu/ToggleMobileMenu.js'
import NavRight from '../../Components/NavRight/NavRight.js'
import breadAndPasta from '../../img/bread-and-pasta.jpg'
import Banner from '../../Components/Banner/Banner.js'
import { smoothiesArray, specialOffersArray, sweetsArray } from './menuArrays.js'
import MenuSection from './MenuSection.js'
import SpecialMenuOffer from './SpecialMenuOffer.js'
import Footer from '../../Components/Footer/Footer.js'

class Menu extends Component {
    render() {
        return (
            <div className='about'>
                <nav>
                    <NavLeft />
                    <ToggleMobileMenu />
                    <NavRight />
                </nav>
                <Banner backgroundImage={breadAndPasta} headerText='menu' />
                <MenuSection menuSectionHeader='smoothies' menuItems={smoothiesArray} />
                <MenuSection menuSectionHeader='special offers' menuItems={specialOffersArray} />
                <MenuSection menuSectionHeader='sweets' menuItems={sweetsArray} />
                <SpecialMenuOffer />
                <Footer />
            </div>
        )
    }
}

export default Menu