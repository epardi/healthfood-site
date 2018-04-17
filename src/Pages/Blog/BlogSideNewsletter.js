import React from 'react'
import './BlogSideNewsletter.css'

const BlogSideNewsletter = () => {
    return (
        <div className='newsletter-side'>
            <h3>newsletter</h3>
            <hr></hr>
            <form id='newsletter-side-form' method='post'>
                <input placeholder='Your email address'></input>
                <button>sign up</button>
            </form>
        </div>
    )
}

export default BlogSideNewsletter