import React, { Component } from 'react'
import './FoodGrid.css'
import instragramFoodImages from '../../Pages/Blog/instagramFoodImages.js'
import carrotNoodles from '../../img/carrot-noodles.jpg'

class FoodGrid extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tooltipX: 0,
			tooltipY: 0,
			tooltipVisibility: 'hidden',
			tooltipText: ''
		}
		if (instragramFoodImages.length === 9)
			instragramFoodImages.splice(7, 0, carrotNoodles)
	}
	handleShowTooltip = event => {
		let imgSrc = event.target.getAttribute('src')
		this.setState({
			tooltipX: event.pageX,
			tooltipY: event.pageY,
			tooltipVisibility: 'visible',
			tooltipText: imgSrc.slice(imgSrc.lastIndexOf('/') + 1, imgSrc.indexOf('.'))
		})
	}
	handleHideTooltip = event => { this.setState({ tooltipVisibility: 'hidden' }) }
	render() {
		return (
			<div className='foods-row'>
				{
					instragramFoodImages.map((food, index) => {
						return (
							<div key={index} className='food-wrapper'>
								<img src={food} alt='food grid item' onMouseEnter={this.handleShowTooltip}
									onMouseLeave={this.handleHideTooltip} />
							</div>
						)
					})
				}
				<span className='tooltip' style={{
					left: this.state.tooltipX,
					top: this.state.tooltipY,
					visibility: this.state.tooltipVisibility
				}}>
					{this.state.tooltipText.replace('2', '').replace(/-/g, ' ')}
				</span>
			</div>
		)
	}
}

export default FoodGrid