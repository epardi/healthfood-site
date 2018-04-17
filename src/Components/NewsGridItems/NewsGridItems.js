import React from 'react'
import { NavLink } from 'react-router-dom'
import foodImages from './foodImages.js'

const NewsGridItems = () => {
	const items = {
		'beetroot-cake': 
			{
				date: '07-DEC', 
                description: 'Beetroot Cake - healthy chocolate cake'
			},
		'smoothie': 
			{
				date: '06-DEC',
                description: 'Refreshing smoothie to start your day'
			},
		'pinky-smoothie':
			{
				date: '03-DEC',
                description:'Pinky Smoothie perfect breakfast'
			},
		'chickpea-falafel':
			{
				date: '15-NOV',
                description: 'Chickpea falafel with avocado cream'
			},
		'buckwheat-barley':
			{
				date: '03-NOV',
                description: 'Buckwheat & barley vegetarian salad'
			},
	 	'energy-bites':
	 		{
	 			date: '06-OCT',
                description: 'Energy Bites – delicious & easy to make'
	 		}
    }
	return (
		Object.entries(items).map(([food, foodInfo]) => {
			return (
				<div key={food} className='news-item'>
					<img src={foodImages[food]} alt={food} className='news-item-img' />
					<div className='news-item-desc'>
						<div className='desc-col'>{foodInfo.date}</div>
						<div className='desc-col'></div>
						<div className='desc-col'><NavLink to='/'>{foodInfo.description}</NavLink></div>
					</div>
				</div>
			)
		})
	)
}

export default NewsGridItems