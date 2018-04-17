import React, { Component } from 'react'
import './NewsGrid.css'
import NewsGridItems from '../NewsGridItems/NewsGridItems.js'

class NewsGrid extends Component {
    componentDidMount() {
        let newsItems = document.querySelectorAll('div.news-item')
        let newsGrid = document.querySelector('div.news-grid')
        newsGrid.innerHTML = 
            `<div class="inner-grid">
                ${newsItems[0].innerHTML}
                ${newsItems[1].innerHTML}
                ${newsItems[2].innerHTML}
            </div>
            <div class="inner-grid">
                ${newsItems[3].innerHTML}
                ${newsItems[4].innerHTML}
                ${newsItems[5].innerHTML}
            </div>`
    }
    render() {
        return (
            <div className='news-grid'>
                <NewsGridItems />
            </div>
        )
    }
}

export default NewsGrid