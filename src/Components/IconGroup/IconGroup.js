import React from 'react'
import './IconGroup.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const IconGroup = () => {
	return (
		<div className='icon-group'>
            <FontAwesome name='facebook' />
            <FontAwesome name='twitter' />
            <FontAwesome name='pinterest' />
            <FontAwesome name='instagram' />
       </div>
	)
}

export default IconGroup