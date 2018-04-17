import React from 'react'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const renderItemStars = rating => {
		let result
		switch(rating) {
			case 5:
				result =
						 <div>
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='fas fa-star star-color' />
						</div>
				break
			case 4:
				result =
						<div>
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='far fa-star' />
						</div>
				break
			case 3:
				result = 
						<div>
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='far fa-star' />
							<FontAwesome name='far fa-star' />
						</div>
				break
			case 2:
				result = 
						<div>
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='far fa-star' />
							<FontAwesome name='far fa-star' />
							<FontAwesome name='far fa-star' />
						</div>
				
				break
			case 1:
				result =
						<div>
							<FontAwesome name='fas fa-star star-color' />
							<FontAwesome name='far fa-star' />
							<FontAwesome name='far fa-star' />
							<FontAwesome name='far fa-star' />
							<FontAwesome name='far fa-star' />
						</div>
				break
			default:
				result = 
						<div>
							<FontAwesome name='far fa-star' />
							<FontAwesome name='far fa-star' />
							<FontAwesome name='far fa-star' />
							<FontAwesome name='far fa-star' />
							<FontAwesome name='far fa-star' />
						</div>
				break
		}
		return result
	}

	export default renderItemStars