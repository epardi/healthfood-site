import React from 'react'
import './NewsContainer.css'
import NewsGrid from '../NewsGrid/NewsGrid.js'

const NewsContainer = () => {
    return (
        <div className='news-container'>
            <p>Join today</p>
			<h1>Latest News</h1>
            <NewsGrid />
        </div>
    )
}

export default NewsContainer