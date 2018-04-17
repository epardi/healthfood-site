import React, { Component } from 'react'
import './Blog.css'
import BlogPosts from './BlogPosts.js'
import BlogSideSection from './BlogSideSection.js'
import NavLeft from '../../Components/NavLeft/NavLeft.js'
import ToggleMobileMenu from '../../Components/ToggleMobileMenu/ToggleMobileMenu.js'
import NavRight from '../../Components/NavRight/NavRight.js'
import healthyDrinks from '../../img/healthy-drinks.jpg'
import Footer from '../../Components/Footer/Footer.js'
import BlogQuote from './BlogQuote.js'

class Blog extends Component {
    insertBlogQuote = () => {
        const blogs = document.querySelector('div#blog-posts')
        const quote = document.querySelector('div.blog-quote')
        blogs.insertBefore(quote, blogs.lastChild)
    }
    componentDidMount() {
        this.insertBlogQuote()
    }
    render() {
        return (
            <div>
                <nav>
                    <NavLeft />
                    <ToggleMobileMenu />
                    <NavRight />
                </nav>
                <div className='blog-container'>
                    <img src={healthyDrinks} alt='get healthy drinks recipe' />
                    <div className='blog'>
                        <BlogPosts />
                        <BlogQuote />
                        <BlogSideSection />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Blog