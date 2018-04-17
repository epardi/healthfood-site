import React from 'react'
import './WeAreHere.css'
import LiberMap from '../About/LiberMap.js'

const WeAreHere = () => {
    return (
        <div className='map-side'>
            <h3>we are here</h3>
            <hr></hr>
            <LiberMap isMarkerShown />
        </div>
    )
}

export default WeAreHere