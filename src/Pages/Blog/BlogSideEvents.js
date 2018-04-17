import React from 'react'
import './BlogSideEvents.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import eventsSideImg from '../../img/events-side.jpg'

const BlogSideEvents = () => {
    return (
        <div className='events-side'>
            <img src={eventsSideImg} alt='energy bites in smoothie' />
            <div className='events-content'>
                <p>join today</p>
                <h1>liber. <span>upcoming</span> events</h1>
                <button>reserve now<FontAwesome name='arrow-right' /></button>
            </div>
        </div>
    )
}

export default BlogSideEvents