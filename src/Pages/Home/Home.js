import React, { Component } from 'react'
import './Home.css'
import '../../Components/nav/nav.css'
import NavLeft from '../../Components/NavLeft/NavLeft.js'
import ToggleMobileMenu from '../../Components/ToggleMobileMenu/ToggleMobileMenu.js'
import NavRight from '../../Components/NavRight/NavRight.js'
import HomeImg from '../../Components/HomeImg/HomeImg.js'
import LiberCard from '../../Components/LiberCard/LiberCard.js'
import Container from '../../Components/Container/Container.js'
import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers.js'
import ContactInfo from '../../Components/ContactInfo/ContactInfo.js'
import NewsContainer from '../../Components/NewsContainer/NewsContainer.js'
import GiftCards from '../../Components/GiftCards/GiftCards.js'
import UserQuotes from '../../Components/UserQuotes/UserQuotes.js'
import Footer from '../../Components/Footer/Footer.js'


class Home extends Component {
  render() {
    return (
      <div className="home">
        <nav>
          <NavLeft />
          <ToggleMobileMenu />
          <NavRight />
        </nav>
        <HomeImg />
        <LiberCard />
        <Container />
        <SpecialOffers />
        <NewsContainer />
        <GiftCards />
        <UserQuotes />
        <Footer />
        <ContactInfo />
      </div>
    )
  }
}


export default Home;
