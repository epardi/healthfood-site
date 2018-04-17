import React, { Component } from 'react'
import './Contact.css'
import NavLeft from '../../Components/NavLeft/NavLeft.js'
import ToggleMobileMenu from '../../Components/ToggleMobileMenu/ToggleMobileMenu.js'
import NavRight from '../../Components/NavRight/NavRight.js'
import Banner from '../../Components/Banner/Banner.js'
import ourStory from '../../img/our-story.jpg'
import BlogSideAbout from '../Blog/BlogSideAbout.js'
import WeAreHere from '../Blog/WeAreHere.js'
import Footer from '../../Components/Footer/Footer.js'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }
    handleInputChange = event => {
        const inputName = event.target.name
        const inputValue = event.target.value
        this.setState({
            [inputName]: inputValue
        })
    }
    render() {
        const { name, email, subject, message } = this.state
        return (
            <div id='contact'>
                <nav>
                    <NavLeft />
                    <ToggleMobileMenu />
                    <NavRight />
                </nav>
                <Banner backgroundImage={ourStory} headerText='contact' />
                <div className='contact-container'>
                    <div className='form-container'>
                        <div className='form-with-paragraph'>
                            <p>Malesuada nibh montes fusce cum eleifend fringilla commodo mattis tempor platea montes. Malesuada nibh montes fusce cum eleifend. Malesuada nibh montes fusce cum eleifend fringilla commodo mattis tempor platea montes.</p>
                            <form action='/contact' method='post' className='contact-form'>
                                <p>Your Name (required)</p>
                                <input name='name' value={name} onChange={this.handleInputChange}></input>
                                <p>Your Email (required)</p>
                                <input type='email' name='email' value={email} onChange={this.handleInputChange}></input>
                                <p>Subject</p>
                                <input name='subject' value={subject} onChange={this.handleInputChange}></input>
                                <p>Your Message</p>
                                <textarea rows='10' name='message' value={message} onChange={this.handleInputChange}></textarea>
                                <button disabled>send</button>
                            </form>
                        </div>
                        <div className='form-side-section'>
                            <BlogSideAbout />
                            <WeAreHere />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact