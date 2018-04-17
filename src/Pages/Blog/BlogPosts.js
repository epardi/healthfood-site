import React from 'react'
import './BlogPosts.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom'
import blogData from './blogData.js'

const BlogPosts = () => {
    return (
        <div id='blog-posts'>
            {blogData.map((blog, index) => {
                return (
                    <div key={index} className='blog-post'>
                        <img src={blog.image} alt={blog.title.split(' ').slice(0, 2)} className='blog-post-img' />
                        <div className='caption'>
                            <span>{blog.tagText}</span>
                            <span><NavLink to='/blog'>leave a comment</NavLink></span>
                            <hr></hr>
                        </div>
                        <h1 className='blog-title'><NavLink to='/blog'>{blog.title}</NavLink></h1>
                        <p className='blog-teaser'>{blog.teaser}</p>
                        <button>continue reading <FontAwesome name='arrow-right' /></button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default BlogPosts