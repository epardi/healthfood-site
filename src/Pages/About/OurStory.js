import React from 'react'
import './OurStory.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import ourStoryImg from '../../img/our-story.jpg'
import LiberMap from './LiberMap.js'

const OurStory = () => {
    return (
        <div>
            <div className='our-story-container'>
                <img src={ourStoryImg} alt='our story'></img>
                <div className='our-story'>
                    <p>visit us</p>
                    <h1>our story</h1>
                    <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris. Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est.</p>
                    <button>tell me more<FontAwesome name='arrow-right' /></button>
                    <LiberMap isMarkerShown />
                </div>
            </div>
        </div>
    )
}

export default OurStory