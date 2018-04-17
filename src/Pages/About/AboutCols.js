import React from 'react'
import './AboutCols.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const AboutCols = () => {
    return (
        <div className='about-cols-container'>
            <div className='about-col'>
                <p>About us</p>
                <h1>Liber Bar</h1>
                <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est.</p>
                <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris. Maecenas vehicula quam vel urna pulvinar, quis faucibus quam pellentesque. Sed vitae pellentesque velit. Etiam nec ornare tortor.</p>
                <button>get to know us <FontAwesome name='arrow-right' /></button>
            </div>
            <div className='about-col'>
                <div className='john-doe'></div>
                <div className='john-doe-signature'></div>
            </div>
            <div className='about-col opening-hours'>
                <div className='opening-hours-img'>
                </div>
                <div className='hours'>
                    <h3>opening hours</h3>
                    <div className='days'>
                        <div className='hours-list-item'>
                            <span>Mon-Thu</span><span><b>11:00-23:00</b></span>
                        </div>
                        <div className='hours-list-item'>
                            <span>Fri-Sun</span><span><b>11:00-23:00</b></span>
                        </div>
                        <div className='hours-list-item'>
                            <span>Wednesday</span><span><b>closed</b></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCols