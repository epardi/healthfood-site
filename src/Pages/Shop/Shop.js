import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Shop.css'
import NavLeft from '../../Components/NavLeft/NavLeft.js'
import ToggleMobileMenu from '../../Components/ToggleMobileMenu/ToggleMobileMenu.js'
import NavRight from '../../Components/NavRight/NavRight.js'
import Banner from '../../Components/Banner/Banner.js'
import shopBanner from '../../img/shop-banner.jpg'
import Footer from '../../Components/Footer/Footer.js'
import processData from './processData.js'
import setHoneyPrice from './setHoneyPrice.js'
import renderItemStars from './renderItemStars.js'
import shopImages from './shopImages.js'

class Shop extends Component {
	constructor(props) {
		super(props)
		this.state = {
			shopItems: [
				{ name: 'balls', averageRating: 5, price: 10.00, image: shopImages[0], idNumber: 0 },
				{ name: 'honey', averageRating: 4, price: 10.00, image: shopImages[1], idNumber: 1 },
				{ name: 'pancakes', averageRating: 5, price: 6.89, image: shopImages[2], idNumber: 2 },
				{ name: 'pie', averageRating: 4, price: 7.56, image: shopImages[3], idNumber: 3 },
				{ name: 'pink-smoothie', averageRating: 5, price: 4.89, image: shopImages[4], idNumber: 4 },
				{ name: 'porridge', averageRating: 5, price: 12.00, image: shopImages[5], idNumber: 5 },
				{ name: 'smoothie', averageRating: 5, price: 4.89, image: shopImages[6], idNumber: 6 },
				{ name: 'pumpkin-pie', averageRating: 4, price: 7.89, image: shopImages[7], idNumber: 7 }
			],
			sortedItems: {},
			selectValue: 'Default sorting',
			addedItemIds: []  
		}
	}
	componentWillMount() {
		let { shopItems, sortedItems } = this.state
		processData(shopItems, sortedItems)
		let sortedPricesCopy = [...sortedItems.price]
		let itemReversePrices = sortedPricesCopy.reverse()
		let sortedRatingsCopy = [...sortedItems.averageRating]
		let itemReverseRatings = sortedRatingsCopy.reverse()
		this.setState({
			shopItems: sortedItems.name,
			sortedItems: {
				...sortedItems,
				'averageRating': itemReverseRatings,
				'reversePrice': itemReversePrices
			}
		})
	}
	componentDidMount() {
		let { shopItems } = this.state
		setHoneyPrice()
		this.setState({ progressItemIndices: shopItems.map(item => item.idNumber) })
	}
	componentWillUpdate() {
		setHoneyPrice()
 	}
	componentDidUpdate() {
		let { addedItemIds } = this.state
		if (addedItemIds) {
			let cartLinks = document.querySelectorAll('.cart-link')
			cartLinks.forEach(link => {
				let linkId = Number(link.getAttribute('index'))
				
				link.style.display = addedItemIds.includes(linkId) ? 'block':'none'
			})
		}
	}
	handleChange = event => {
		let { sortedItems } = this.state
		let selectedOption = document.querySelector('select').selectedOptions[0].getAttribute('name')

		switch (selectedOption) {
			case 'rating':
				this.setState({
					shopItems: sortedItems.averageRating,
					selectValue: event.target.value,
					progressItemIndices: sortedItems.averageRating.map((item, index) => item.idNumber)
				})
				sortedItems.averageRating.forEach(item => renderItemStars(item.averageRating))
				break
			case 'price-l-h':
				this.setState({
					shopItems: sortedItems.price,
					selectValue: event.target.value,
					progressItemIndices: sortedItems.price.map((item, index) => item.idNumber)
				})
				sortedItems.price.forEach(item => renderItemStars(item.averageRating))
				break
			case 'price-h-l':
				this.setState({
					shopItems: sortedItems.reversePrice,
					selectValue: event.target.value,
					progressItemIndices: sortedItems.reversePrice.map((item, index) => item.idNumber)
				})
				sortedItems.reversePrice.forEach(item => renderItemStars(item.averageRating))
				break
			default:
				this.setState({
					shopItems: sortedItems.name,
					selectValue: event.target.value,
					progressItemIndices: sortedItems.name.map((item, index) => item.idNumber)
				})
				sortedItems.name.forEach(item => renderItemStars(item.averageRating))
				break
		}
	}
	handleAddItem = event => {
		event.persist()
		let { shopItems, addedItemIds } = this.state
		let itemIndex = Number(event.target.getAttribute('index'))
		let itemName = shopItems[itemIndex].name
		let parsedItem = JSON.parse(localStorage.getItem(itemName))
		if (parsedItem) {
			parsedItem.quantity++
			parsedItem.total = parsedItem.price * parsedItem.quantity
			localStorage.setItem(itemName, JSON.stringify(parsedItem))
		} else {
			shopItems[itemIndex].quantity = 1
			shopItems[itemIndex].total = shopItems[itemIndex].price * shopItems[itemIndex].quantity
			localStorage.setItem(itemName, JSON.stringify(shopItems[itemIndex]))
		}
		let spinner = document.querySelectorAll('span.fa-cog')[itemIndex]
		spinner.style.display = 'block'
		let shopItemBtn = document.querySelectorAll('div.shop-item button')[itemIndex]
		shopItemBtn.setAttribute('disabled', 'true')
		window.setTimeout(() => {
			let itemIndex = Number(event.target.getAttribute('index'))
			let cartLink = document.querySelectorAll('.cart-link')[itemIndex]
			let spinner = document.querySelectorAll('span.fa-cog')[itemIndex]
			let shopItemBtn = document.querySelectorAll('div.shop-item button')[itemIndex]
			cartLink.style.display = 'block'
			spinner.style.display = 'none'
			shopItemBtn.removeAttribute('disabled')
			let linkId = Number(cartLink.getAttribute('index'))
			this.setState({ addedItemIds: [...addedItemIds, linkId] })
		}, 1000)
	}
	render() {
		let { shopItems } = this.state
		return (
			<div>
				<nav>
					<NavLeft />
					<ToggleMobileMenu />
					<NavRight />
				</nav>
				<Banner backgroundImage={shopBanner} headerText='shop' />
				<div id='shop-container'>
					<div id='shop-items-container'>
						<div className='select-container'>
							<select onChange={this.handleChange}>
								<option name='default' value='Default sorting'>Default sorting</option>
								<option name='rating' value='Sort by average rating'>Sort by average rating</option>
								<option name='price-l-h' value='Sort by price: low to high'>Sort by price: low to high</option>
								<option name='price-h-l' value='Sort by price: high to low'>Sort by price: high to low</option>
							</select>
						</div>
						<div id='shop-items-grid'>
							{
								shopItems.map((item, index) => {
									let currencyFormatter = new Intl.NumberFormat('en-US',
										{
											style: 'currency',
											currency: 'USD',
											minimumFractionDigits: 2,
										})
									return (
										<div key={index} className='shop-item'>
											<img src={item.image} alt='shop item' />
											<span className='shop-item-price'>
												{
													currencyFormatter.format(item.price)
												}
											</span>
											<p>
												{item.name.replace('-', ' ')}
											</p>
											<div className='starContainer'>
												{renderItemStars(item.averageRating)}
											</div>
											<FontAwesome index={item.idNumber} name='fas fa-cog fa-spin' size='2x' />
											<NavLink  index={item.idNumber} className='cart-link' to='/cart'><FontAwesome name='fas fa-check-circle' />View cart</NavLink>
											<NavLink to='/shop'>
												<button index={index} onClick={this.handleAddItem}>add to cart <FontAwesome name='arrow-right' />
												</button>
											</NavLink>
										</div>)
								})
							}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Shop