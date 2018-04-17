import React from 'react'
import './BlogSideSection.css'
import BlogSideAbout from './BlogSideAbout.js'
import BlogSideInstagram from './BlogSideInstagram.js'
import BlogSideNewsLetter from './BlogSideNewsletter.js'
import johnDoe from '../../img/john-doe.png'
import WeAreHere from './WeAreHere.js'
import BlogSideEvents from './BlogSideEvents.js'
import BlogSideSpecials from './BlogSideSpecials.js'

const BlogSideSection = () => {
    return (
        <div className='blog-side-section'>
            <BlogSideAbout />
            <BlogSideInstagram />
            <BlogSideNewsLetter />
            <img src={johnDoe} alt='john doe' />
            <WeAreHere />
            <BlogSideEvents />
            <BlogSideSpecials />
        </div>
    )
}

export default BlogSideSection