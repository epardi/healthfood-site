import React, { Component } from 'react'
import './Banner.css'

class Banner extends Component {
    render() {
        return (
            <div className='banner'
                style={{ backgroundImage: `url("${this.props.backgroundImage}")`,
                    backgroundPosition: this.props.backgroundPosition
                }}
            >
                <div className='header'>
                    <h1>{this.props.headerText}</h1>
                </div>
            </div>
        )
    }
}

export default Banner