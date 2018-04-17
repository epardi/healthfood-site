import React from 'react'
import './SpecialMenuOffer.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const SpecialMenuOffer = () => {
    return (
        <div className='menu-offer-container'>
            <div className='menu-offer-card'>
                <h1>special menu offer</h1>
                <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris. Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est.</p>
                <button>book a table <FontAwesome name='arrow-right' /></button>
            </div>
        </div>
    )
}

export default SpecialMenuOffer