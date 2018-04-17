import React from 'react'
import './BlogQuote.css'

const BlogQuote = () => {
    return (
        <div className='blog-quote'>
            <div className='quote-content'>
                <div className='caption'>
                    <span>december 4, 2016</span>
                    <span>leave a comment</span>
                </div>
                <hr></hr>
                <blockquote>Cooking and taking photos of food I cook help me <b>relax</b> and this is exactly what I need at times. At the same time it is a great way to store all the recipes and share them with <b>friends</b> and family.</blockquote>
                <span>ana segota</span>
            </div>
        </div>
    )
}

export default BlogQuote