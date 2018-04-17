import React from 'react'
import './BlogSideInstagram.css'
import instagramFoodImages from './instagramFoodImages.js'

const BlogSideInstagram = () => {
    return (
        <div className='instagram-side'>
            <h3>instagram</h3>
            <hr></hr>
            <div className='grid'>
                {
                    instagramFoodImages.map((image, index) => {
                        return (
                            <img key={index} src={image} alt='food grid item' />
                        )
                    })
                }
            </div>
            <button>view on instagram</button>
        </div>
    )
}

export default BlogSideInstagram