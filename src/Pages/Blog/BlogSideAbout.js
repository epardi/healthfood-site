import React from 'react'
import './BlogSideAbout.css'
import teamOne from '../../img/team-one.jpg'
import logo from '../../img/liber-logo.png'

const BlogSideAbout = () => {
    return (
        <div className='about-side'>
            <h3>about us</h3>
            <hr></hr>
            <img src={teamOne} alt='about us' />
            <p>Malesuada nibh montes fusce cum eleifend fringilla commodo mattis tempor platea montes. Malesuada nibh montes fusce cum eleifend. Malesuada nibh montes fusce cum eleifend fringilla commodo mattis tempor platea montes.</p>
            <img src={logo} alt='liber logo' />
        </div>
    )
}

export default BlogSideAbout